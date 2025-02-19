import { Component } from 'react';
import { Button, ModalForm } from 'react-admin-kit';

export default class ModalFormInitialValueCase extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      formData: {},
    };
  }

  render() {
    return (
      <div>
        <Button
          onClick={() =>
            this.setState({
              open: true,
              formData: { name: 'Jack2', phone: 123 },
            })
          }
        >
          打开
        </Button>
        <ModalForm
          onCancel={() => this.setState({ open: false })}
          open={this.state.open}
          formProps={{
            initialValues: this.state.formData,
          }}
          columns={[
            {
              title: 'name',
              dataIndex: 'name',
              initialValue: 'Hello',
            },
            {
              title: 'phone',
              dataIndex: 'phone',
            },
          ]}
        />
      </div>
    );
  }
}
