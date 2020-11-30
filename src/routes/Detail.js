import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined ){ // location.state가 없는 경우
            history.push('/'); // Home으로 이동
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return (
                <div>
                    <h3>{location.state.title}</h3>
                    <span>{location.state.summary}</span>
                </div>
            )
        }
        else{
            return null;
        }
    }
   
}

export default Detail;