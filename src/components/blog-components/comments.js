import React, { Component } from 'react';




class Comments extends Component {
	render() {

		let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
		return (
			<div>
				<hr />
				<div className="ltn__comment-reply-area ltn__form-box mb-60---">
					<h4 className="title-2">Post Comment</h4>
					<form action="#">
						<div className="input-item input-item-textarea ltn__custom-icon">
							<textarea placeholder="Type your comments...." defaultValue={""} />
						</div>
						<div className="input-item input-item-name ltn__custom-icon">
							<input type="text" placeholder="Type your name...." />
						</div>
						<div className="input-item input-item-email ltn__custom-icon">
							<input type="email" placeholder="Type your email...." />
						</div>
						<div className="input-item input-item-website ltn__custom-icon">
							<input type="text" name="website" placeholder="Type your website...." />
						</div>
						<label className="mb-0 input-info-save"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label>
						<div className="btn-wrapper">
							<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit"><i className="far fa-comments" /> Post Comment</button>
						</div>
					</form>
				</div>
			</div>

		)
	}
}

export default Comments;
