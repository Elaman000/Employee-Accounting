import './poiskcotridnik.css'
import {Component} from "react";

class PoiskSatridnik extends Component{
    constructor(props) {
        super(props);
        this.state= {
            term: '',
        }
    }
    onUpdateTerm = (e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateTerm(term)
    };

    render() {
        return(
                <input className="input"  type="text"
                       placeholder={'Поиск сотрудник...'}
                       value={this.state.term}
                       onChange={this.onUpdateTerm}/>
        )
    }


}
export default PoiskSatridnik;