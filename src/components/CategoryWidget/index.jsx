import LogoIcon from '../../assets/logo.svg'
import {Select} from "../Select/index.jsx";
import {Button} from "../Button/index.jsx";

export const CategoryWidget = ({size = 'medium', loading = false}) => {
    if (loading) {
        return (
            <div className="bill-winner-loader-container">
                <div className="bill-winner-loader"/>
            </div>
        )
    }
    return (
        <div className={`bill-winner-widget-wrapper ${size}`}>
            <div>
                <img src={LogoIcon} alt="logo"/>
            </div>
            <div className="bill-winner-widget-title">
                See the top voted businesses in your Insurance area!
            </div>
            <div className="bill-winner-widget-form">
                <div className="bill-winner-widget-form-item">
                    <Select label="Category"/>
                </div>
                <div className="bill-winner-widget-form-item">
                    <Select label="Category"/>
                </div>
                <div className="bill-winner-widget-form-item">
                    <Button text="Let’s Go!" />
                </div>
            </div>
        </div>
    )
}