
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29,
          "features": [
            "Access to gym facilities",
            "Limited group classes",
            "Basic locker usage",
            "Cardio equipment access",
            "Strength training equipment access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49,
          "features": [
            "Full access to gym facilities",
            "Unlimited group classes",
            "Locker usage",
            "Towel service",
            "Cardio equipment access",
            "Strength training equipment access",
            "Sauna access",
            "Swimming pool access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79,
          "features": [
            "Full access to gym facilities",
            "Unlimited group classes",
            "Locker usage",
            "Towel service",
            "Personal training session (1/month)",
            "Cardio equipment access",
            "Strength training equipment access",
            "Sauna access",
            "Swimming pool access",
            "Nutritional counseling"
          ]
        }
      ]

    return (
        <div className="m-12">
            <h2 className="text-3xl lg:text-5xl text-center font-bold mb-6">Best Price Available</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
               priceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;