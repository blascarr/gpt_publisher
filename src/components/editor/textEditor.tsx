import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

type Props = {};

type State = {
	contenido: string;
};

export class EditorTexto extends React.Component<Props, State> {
	state: State = {
		contenido: '',
	};

	handleEditorChange = (contenido: string) => {
		this.setState({ contenido });
	};

	render() {
		return (
			<Editor
				initialValue='<p>Empieza a escribir aquí...</p>'
				init={{
					height: 500,
					menubar: false,
					plugins: [
						'advlist autolink lists link image charmap print preview anchor',
						'searchreplace visualblocks code fullscreen',
						'insertdatetime media table paste code help wordcount',
					],
					toolbar:
						'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help',
				}}
				onEditorChange={this.handleEditorChange}
			/>
		);
	}
}
