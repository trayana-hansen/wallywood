import {AddToCartButtonStyle} from
import { useAuth } from '../../Components/Providers/AuthProvider'
import axios from 'axios'

const AddToCartButton = props => {
const {loginData} = useAuth()

const submitToCart = async () => {
	const options = {
		headers: {
			Authorization: `Bearer ${loginData}`
		}
	}

	const formdata = new URLSearchParams()
	formdata.append('poster_id', props.id)
	formdata.append('quantity', 1)
	const endpoint = `http://localhost:4000/cart`
	const result = await axios.post(endpoint, formdata, options)
}

return (
	<AddToCartButtonStyle onClick={submitToCart}>
		{props.children}
	</AddToCartButtonStyle>
)
}
export default AddToCartButton
