import {Card, Typography} from "@material-tailwind/react";
import {getStatusColor} from "../../utlis.jsx";
import {DefaultPaginationTile} from "../Shared/DefaultPaginationTile.jsx";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import {route} from "ziggy-js";

const TABLE_HEAD = ["name", 'Prénoms', 'E-mail', 'Telephone', 'Status', 'Actions'];

const TABLE_ROWS = [

        {
            "ID": 2,
            "name": "Alexa Liras",
            "prenoms": "Developer",
            "email": "alexa@example.com",
            "phone": "555-5678",
            "status": "inactive"
        },
        {
            "ID": 3,
            "name": "Laurent Perrier",
            "prenoms": "Executive",
            "email": "laurent@example.com",
            "phone": "555-9012",
            "status": "blocked"
        },
        {
            "ID": 4,
            "name": "Michael Levi",
            "prenoms": "Developer",
            "email": "michael@example.com",
            "phone": "555-3456",
            "status": "active"
        },
        {
            "ID": 5,
            "name": "Richard Gran",
            "prenoms": "Manager",
            "email": "richard@example.com",
            "phone": "555-7890",
            "status": "inactive"
        }
    ]
;

const UsersTable = ({data}) => {


    const users = data.data;
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th key={head} className=" bg-blue-gray-50 p-4">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium text-gray-400"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {users.map((user) => <UsersRow user={user}/>)}
                </tbody>
            </table>

            {
                <DefaultPaginationTile links={data.links} total={data.total} label='Utilisateurs'/>
            }
        </Card>
    );
}


const UsersRow = ({user}) => {

    const handleRowClick = () => Inertia.visit(route('users.edit', {id: user.id}));


    const color = getStatusColor(user.status);
    return <tr key={name} className="even:bg-blue-gray-50/50 cursor-pointer" onClick={handleRowClick}>
        <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
                {user.name}
            </Typography>
        </td>
        <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
                {user.prenoms}
            </Typography>
        </td>
        <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
                {user.email}
            </Typography>
        </td>
        <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
                {user.phone}
            </Typography>
        </td>

        <td className="p-4">
            <div className={`flex items-center justify-center w-max rounded-full px-[10px] py-0.5
            bg-${color} bg-opacity-25 text-${color}`}>
                {user.status}
            </div>
        </td>
        <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
                Edit
            </Typography>
        </td>

    </tr>
}


export default UsersTable;
