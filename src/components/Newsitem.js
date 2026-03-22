import React, { Component } from 'react'


export class  Newsitem extends Component {
  render() {
    let {title,description,url,newsUrl}=this.props;
    return (
      <>
    <div className="card" style={{width:"18rem;"}}>
      <img src={!url?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg":url} className='card-img-top'
      alt=".."/>
<div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">TOP Newes</a>
  </div>

</div>
</>

    )
  }
}
