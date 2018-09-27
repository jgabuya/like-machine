import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {	
	onUrlChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

const LinkForm = props => {
	return (
		<div>
			<Form onSubmit={props.onSubmit}>
				<h4>New Link</h4>

				<FormGroup>
					<Label for="input-title">URL</Label>
					<Input
						type="text"
						id="input-title"
                        onChange={props.onUrlChange}
                        required
					/>
				</FormGroup>

				<FormGroup>
					<Button color="primary">Submit</Button>
				</FormGroup>
			</Form>
		</div>
	);
};

LinkForm.propTypes = propTypes;

export default LinkForm;
