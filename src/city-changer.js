import React from 'react';
import './city-changer.css';

class CityChanger extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            show: false
        })
    }

    render() {
        let self = this;
        function openModal() {
            self.setState({
                show: true
            })
        }
        function closeModal() {
            self.setState({
                show: false
            })
        }
        document.addEventListener('keyup', function(e) {
            if(self.state.show && e.keyCode === 13){
                let cityName = document.getElementById('city-name').value;
                self.props.getNewWeather(cityName);
                closeModal();
            }
        })
        return (
            <div className="city-changer">

                <div className="btn-container">
                    <a href="#" className="btn" onClick={openModal}>Change City</a>
                </div>
                <div id="input-container" className={this.state.show?"":"hidden"}>
                    <input type="text" placeholder="london,uk" id="city-name"/>
                    <a href="#" className="btn" onClick={closeModal}>Cancel</a>
                </div>
            </div>
        )
    }

}

export default CityChanger