import { Component } from 'react'

class ItemList extends Component {
  render() {
    const items = this.props.items

    return (
      <div style={{ textAlign: 'left', marginLeft: '20px' }}>
        <h2>Item List</h2>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ItemList
