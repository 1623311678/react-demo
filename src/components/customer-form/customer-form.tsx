import React from "react";
import "./customer-form.less";
import "font/iconfont.css";
interface CustomerFormState {
  value: string;
  type: string;
  isSubmit:boolean
}
interface CustomerFormProps {
  type: string;
  value1: string;
  placeholder: string;
}
class CustomerForm extends React.Component<
  CustomerFormProps,
  CustomerFormState
> {
  constructor(props: CustomerFormProps) {
    super(props);
    this.state = {
      value: "",
      type: this.props.type,
      isSubmit:false
    };
  }
  getvalue() {
    return this.state.type === "submit" ? this.props.value1 : this.state.value;
  }
  handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event: any) => {
    alert("您好，您的账号已登陆");
    this.setState({
      isSubmit:true
      
    })
    event.preventDefault();
  };

  render() {
    return (
      <div className="customer-form">
        <form action="" onSubmit={this.handleSubmit}>
          <input
            className="customer-text"
            type={this.state.type}
            value={this.getvalue()}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          />
        </form>
      </div>
    );
  }
}
export default CustomerForm;
