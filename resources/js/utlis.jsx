export function getStatusColor (status)  {
    if (status === 'active') {
        return 'green-600';
    } else if (status === 'inactive') {
        return 'orange-600';
    } else if (status === 'blocked') {
        return 'red-600';
    } else {
        return 'gray-500';
    }
}

