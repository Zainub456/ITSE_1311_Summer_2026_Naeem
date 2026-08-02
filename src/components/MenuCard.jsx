import { currencyFormatter } from '../data/menuData';

export default function MenuCard({ item }) {
    return (
        <div style={{ border: '1px solid #ccc', padding:'15px', borderRadius: '8px', width: '250px' }}>
            <h3>{item.combo}</h3>
            <p><strong>Main:</strong> {item.main}</p>
            <p><strong>Side:</strong> {item.side}</p>
            <p><strong>Price:</strong> {currencyFormatter.format(item.price)}</p>
            <p><strong>Note:</strong> {item.note}</p>
            <button>Order</button>
        </div>

    );
}