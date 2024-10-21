import { House, Lightbulb } from 'lucide-react';

import styles from './styles.module.css';
import ItemMenu from './components/item-menu';

const listMenu = [
	{
		id: 1,
		label: "Home",
		icon: <House size={18} />
	},
	{
		id: 2,
		label: "Soluções",
		icon: <Lightbulb size={18} />,
		submenu: [
			{
				id: 2.1,
				label: "Solução 1",
			},
			{
				id: 2.2,
				label: "Solução 2",
			},
		]
	},
	{
		id: 3,
		label: "Produtos",
		icon: <Lightbulb size={18} />,
		submenu: [
			{
				id: 3.1,
				label: "Produto 1",
			},
			{
				id: 3.2,
				label: "Produto 2",
			},
		]
	}
]

const Sidebar = () => {
  return (
		<div className={styles.sidebar}>
			<div className={styles.nav}>
				{listMenu.map((item) => (
					<ItemMenu 
						id={item.id}
						label={item.label}
						icon={item.icon}
						submenu={item.submenu}
					/>
				))}				
			</div>
		</div>
	)
}

export default Sidebar;