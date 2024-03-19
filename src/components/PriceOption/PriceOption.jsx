import PropTypes from 'prop-types'; 
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 flex flex-col lg:my-10 rounded-md p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-center my-8 text-3xl'>{name}</h4>
            <div className='space-y-2 text-black text-lg font-medium flex-grow'>
            {
                features.map(feature => <Feature 
                key={feature.id} 
                feature={feature}
                ></Feature>)
            }
            </div>
         <button className='mt-8 lg:mt-8 bg-green-700 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:  PropTypes.object
}

export default PriceOption;