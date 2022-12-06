import React, { useState } from 'react';

import './Sign.css';

//Bootstrap and jQuery libraries
// import 'bootstrap/dist/css/bootstrap.min.css';

// form and modal modules
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


class Sign extends React.Component {

  // state = {
  //   value: ''
  // };

  // getValue = (event) => {
  //   console.log('Event: ', event.target.value);

  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault(); // Stop reloading
  //   const value = this.state.value;

  //   console.log

  //   //TODO
    
  // };
  
  render(){

    console.log('State: ', this.state);
    // Register Form
    const { Option } = Select;
      const AutoCompleteOption = AutoComplete.Option;
      const residences = [
        {
          value: 'Madhya Pradesh',
          label: 'Madhya Pradesh',
          children: [
            {
              value: 'Sehore',
              label: 'Sehore',
              children: [
                {
                  value: 'Lasudiya Khas',
                  label: 'Lasudiya Khas',
                },
                {
                  value: 'Gawa Kheda',
                  label: 'Gawa Kheda',
                },
                {
                  value: 'Mana Khedi',
                  label: 'Mana Khedi',
                },
                {
                  value: 'Nipaniya Kalan',
                  label: 'Nipaniya Kalan',
                },
                {
                  value: 'Beda Khedi',
                  label: 'Beda Khedi',
                },
              ],
            },
          ],
        },
        // {
        //   value: 'State2',
        //   label: 'State2',
        //   children: [
        //     {
        //       value: 'distric2.1',
        //       label: 'district2.2',
        //       children: [
        //         {
        //           value: 'village2.1.1',
        //           label: 'village2.1.2',
        //         },
        //       ],
        //     },
        //   ],
        // },
      ];

      const roles = [
        {
          value: 'User',
          label: 'User',
        },
        {
          value: 'Admin',
          label: 'Admin',
        },
        {
          value: 'Owner',
          label: 'Owner',
        },
      ];

      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();

        const onFinish = (values) => {
          console.log('Received values of form: ', values);
        };

        const prefixSelector = (
          <Form.Item name="prefix" noStyle>
            <Select
              style={{
                width: 70,
              }}
            >
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>
          </Form.Item>
        );
        const [autoCompleteResult, setAutoCompleteResult] = useState([]);

        const onWebsiteChange = (value) => {
          if (!value) {
            setAutoCompleteResult([]);
          } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
          }
        };

        const websiteOptions = autoCompleteResult.map((website) => ({
          label: website,
          value: website,
        }));
        return (
          <Modal
          visible={visible}
          title="Login"
          okText="Login"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ['State', 'District', 'Village'],
              prefix: '86',
            }}
            scrollToFirstError
          >
            <Form.Item
              name="Adhaar No."
              label={
                <span>
                  Adhaar No. 
                  <Tooltip title="This number is authenticated to be used for login purpose by the Admin/Owner. ">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please input your Adhaar No.',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="Role"
              label="Role"
              rules={[
                {
                  type: 'array',
                  required: true,
                  message: 'Please select your role',
                },
              ]}
            >
              <Cascader options={roles} />
            </Form.Item>

            {/* <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item> */}

            {/* <Form.Item
              name="nickname"
              label={
                <span>
                  Nickname 
                  <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item> */}

            <Form.Item
              name="residence"
              label="Village Name"
              rules={[
                {
                  type: 'array',
                  required: true,
                  message: 'Please select the village name',
                },
              ]}
            >
              <Cascader options={residences} />
            </Form.Item>

            {/* <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item> */}

            {/* <Form.Item
              name="website"
              label="Website"
              rules={[
                {
                  required: true,
                  message: 'Please input website!',
                },
              ]}
            >
              <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                <Input />
              </AutoComplete>
            </Form.Item> */}

            {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: 'Please input the captcha you got!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item> */}

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            
          </Form>
          </Modal>
        );
      };
    //popup and form code
   
      
      const CollectionsPage = () => {
        const [visible, setVisible] = useState(false);
      

       //With this, we will get all field values.
        const onCreate = (values) => {
          console.log('Received values of form: ', values);
          setVisible(false);
        };
      
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                setVisible(true);
              }}
            >
              Login
            </Button>
            <CollectionCreateForm
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </div>
        );
      };
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          
         
      </div>
      
      <div className="container">
          
      <CollectionsPage />
        </div>
      </div>
  );
}

}
export default Sign;