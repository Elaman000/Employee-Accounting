import './add.css'
import {Component} from "react";
class AddSotrudnik extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            seleri: ''
        }
    }
    onChengValu= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name !== '' && this.state.seleri !== ''){
            this.props.onAdd(this.state.name, this.state.seleri);
            this.setState({
                name: '',
                seleri: ''
            })
        }
    };
    render() {
        const {name, seleri} = this.state;
        return(
            <div className="conteiner">
                <h3>Добавить нового сотрудника</h3>
                <form onSubmit = {this.onSubmit}>
                    <input className="inp" type="text"
                           placeholder={'Ф.И.О.'}
                           name="name"
                           value={name}
                           onChange={this.onChengValu}/>
                    <input className="inp" type="number"
                           placeholder={'Зарплата'}
                           name="seleri"
                           value={seleri}
                           onChange={this.onChengValu}/>
                    <button type="submit"
                    >Добавить</button>
                </form>
            </div>
        )
    }


}
export default AddSotrudnik;