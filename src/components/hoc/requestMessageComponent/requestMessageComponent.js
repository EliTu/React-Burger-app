import React, { useState, useEffect } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from './requestMessageComponent.module.css';

const requestMessageComponent = (WrappedComponent, axiosInstance) => {
	return ({ ...props }) => {
		// Local state hooks:
		const [error, setError] = useState(null);
		const [responseStatus, setResponseStatus] = useState(false);

		useEffect(() => {
			const requestInterceptor = axiosInstance.interceptors.request.use(
				request => {
					setError(null);
					return request;
				}
			);

			const responseInterceptor = axiosInstance.interceptors.response.use(
				res => setResponseStatus(res.status === 200 ? true : false),
				error => setError(error)
			);

			return () => {
				// Remove the interceptors upon unmounting the component
				axiosInstance.interceptors.response.eject(responseInterceptor);
				axiosInstance.interceptors.request.eject(requestInterceptor);
			};
		}, [error, responseStatus]);

		const handleErrorConfirmClick = () => {
			this.setState({
				error: null,
				responseStatus: false,
			});
		};

		// CSS Modules styles:
		const { ErrorText, confirmationText } = styles;

		const errorMessage = error ? (
			<p className={ErrorText}>
				Oops! Something went wrong :\
				<span>({error.message})</span>
			</p>
		) : null;

		const confirmationMessage = responseStatus ? (
			<p className={confirmationText}>Received</p>
		) : null;

		return (
			<>
				<Modal
					show={error || responseStatus}
					closeModalHandler={handleErrorConfirmClick}
				>
					{confirmationMessage}
					{errorMessage}
				</Modal>
				<WrappedComponent {...props} />
			</>
		);
	};
};
export default requestMessageComponent;
