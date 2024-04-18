import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

export function DefaultPaginationTile({links = [], total = 0, label}) {

    // don't render, if there's only 1 page (previous, 1, next)
    if (links.length === 3) return null;
    return (
        <div className="flex items-center justify-between border-t border-gray-50 bg-white px-4 py-3 sm:px-6">

            {
                // links.map()
            }
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#"
                   className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#"
                   className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>


            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        {total} {label}
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

                        {
                            links.map(({url, label, active}) => {
                                if (url === null) {
                                    return <InactivePage label={label}/>
                                }
                                return <PageLink url={url} active={active} label={label}/>
                            })
                        }

                    </nav>
                </div>
            </div>
        </div>

    );
}

const InactivePage = ({label}) => (
    <div
        className={`
        relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-offset-0
  `}
        dangerouslySetInnerHTML={{__html: label}}/>
)


const PageLink = ({url, label, active}) => (
    <InertiaLink
        className={`
        relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1
        ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0
        ${active?'bg-primary text-white':'hover:bg-gray-50'}
        `}
        href={url}>
        <span dangerouslySetInnerHTML={{__html: label}}></span>
    </InertiaLink>

    /*
       <InertiaLink href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{label}</InertiaLink>
     */
)
