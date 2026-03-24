import ItemList from '../../components/itemList/ItemList'

export default function HomePage() {
  const items = ['Iphone 17', 'Iphone 17 Air', 'Iphone 17 Pro', 'Iphone 17 Pro Max']

  return (
    <div>
      <h1>Home Page</h1>
      <ItemList items={items} />
    </div>
  )
}
