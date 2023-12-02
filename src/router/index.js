import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Plannogram
import ListPlannogram from '../views/Plannogram/list'
import CreatePlannogram from '../views/Plannogram/Create'
import UpdatePlannogram from '../views/Plannogram/Update'
import DetailPlannogram from '../views/Plannogram/detail'

// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},

		{
			path: '/create-plannogram',
			name: 'create-plannogram',
			component: CreatePlannogram
		},
		{
			path: '/detail-plannogram',
			name: 'detail-plannogram',
			component: DetailPlannogram
		},
		{
			path: '/list-plannogram',
			name: 'list-plannogram',
			component: ListPlannogram
		},
		{
			path: '/update-plannogram',
			name: 'update-plannogram',
			component: UpdatePlannogram
		}
	]
})
