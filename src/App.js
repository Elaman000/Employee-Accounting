import React, {Component} from 'react';

import './index.css';
import './Poisk-satrudnikov/poiskcotridnik.css'

import InformationSite from "./Spisoc=k-satrudnirjd/zagalovak-info";
import PoiskSatridnik from "./Poisk-satrudnikov/poisksotrudnokov";
import SpisokLudei from './Sbor spisok ludei/sborhik'
import AddSotrudnik from './Add-sotrudnikov/addSotrudnuk'
import Filter from './Poisk-satrudnikov/filterSpisok'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('Spisok Card'))  || [
                {name: 'Alex', mani: 5000, incrise: true, star: true,  id: 1},
                {name: 'Vitalic', mani: 1000, incrise: false, star: false,  id: 2},
                {name: 'Nastia', mani: 5000, incrise: true, star: true,  id: 3}
            ],
            term: '',
            filter: ''
        };
        this.maxId = 4;
    }
    delitItem = (id)=>{
        this.setState(({data}) =>{
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    };

    addItem = (name, seleri) => {
        const newItem = { name: name, mani: seleri, incrise:true, star: false, id: this.maxId++ };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    };

    onToggleProp = (id,prop)=>{
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    };

    searshEmp = (items, term)=>{
       if(term.length === 0){
           return items;
       }else {
           return items.filter(item => {
               return item.name.indexOf(term) > -1
           })
       }

    };

    onUpdateTerm = (term)=>{
        this.setState({term: term});
    };

    onFilterSposok =(filter)=>{
        this.setState({filter: filter})
    };

    filterPost = (items, filter)=>{
        switch (filter) {
            case 'rise':
                return items.filter(item => !item.star);
            case 'morerThen1000':
                return items.filter(item => item.mani > 1000);
            default:
                return items;
        }
    };
    newSersh = (value, id)=>{
        this.setState(({data}) => {
            data.map(item =>{
                if (item.id=== id){
                    return item.mani= value;
                }
            })
        });
        localStorage.setItem('Spisok Card', JSON.stringify(this.state.data));
    };

  render() {
      const {data, term, filter} = this.state;
      localStorage.setItem('Spisok Card', JSON.stringify(data));
      const visyblData = this.filterPost(this.searshEmp(data, term), filter);
      return (
          <div className="App">
              <InformationSite
                data={data}
              />
              <div className="conteiner">
                  <PoiskSatridnik
                      onUpdateTerm={this.onUpdateTerm}/>
                  <Filter onFilterSposok={this.onFilterSposok}/>
              </div>

              <SpisokLudei
                  vallue={this.newSersh}
                  data={visyblData}
                  onDelete = {this.delitItem}
                  onToggleProp={this.onToggleProp}/>
              <AddSotrudnik
                  onAdd={this.addItem}/>
          </div>
      );
  }


}

export default App;
