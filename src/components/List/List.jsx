import PropTypes from 'prop-types'; 

const List = ({route}) => {
    return (
        <li className="mr-10 hover:bg-yellow-400 rounded-xl px-6">
            <a href={route.path}>{route.name}</a>
            </li>
    );
};

List.propTypes = {
    route:  PropTypes.array
}

export default List;