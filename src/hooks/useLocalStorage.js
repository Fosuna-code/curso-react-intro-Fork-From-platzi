import React from "react";

class UseLocalStorage extends React.Component{
    state = {
        item: this.props.initialValue,
        loading: true ,
        error: false
    }

    setItem =(item) =>{
        this.setState({item: item});
    }
    setLoading = (loading) =>{
        this.setState({loading: loading});
    }
    setError = (error) =>{
        this.setState({error: error});
    }
    localStorageManage(){
        setTimeout(() => {

            try {
              const localStorageItem = localStorage.getItem(this.props.itemName);
              let parsedItem;
          
              if(!localStorageItem){
                localStorage.setItem(this.props.itemName, JSON.stringify(localStorageItem));
                parsedItem = this.props.initialValue;
              }else{
                parsedItem = JSON.parse(localStorageItem);
                this.setItem(parsedItem);
              }
              this.setLoading(false);
            } catch (error) {
              this.setLoading(false);
              this.setError(true)
            }
          },2000)
        }

        
    componentDidMount(){
        this.localStorageManage();
    }

    saveItem = (newItem) =>{
        localStorage.setItem(this.props.itemName, JSON.stringify(newItem));
        this.setItem(newItem);
      } 
    render(){
      const {item, 
            error,
            loading} = this.state ;
      const saveItem = this.saveItem;
        return this.props.children({
            item,
            saveItem,
            error,
            loading
          })
      }
      

}

export default UseLocalStorage;