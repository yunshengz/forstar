import Vue from 'vue'
import {
  Alert,
  Divider,
  AutoComplete,
  Button,
  Row,
  Input,
  Tabs,
  Select,
  Form,
  Modal,
  Checkbox,
  Tag,
  Tooltip,
  Dropdown,
  Menu,
  message,
  notification,
  Icon,
  Radio,
  Popover,
  Transfer,
  Table,
  Tree,
  TreeSelect,
  Breadcrumb,
  List,
  Rate,
  DatePicker,
  TimePicker,
  Pagination,
  Upload,
  Popconfirm,
  InputNumber,
  Switch,
  Cascader,
  LocaleProvider,
  Collapse,
  Drawer,
  Spin,
  Progress,
  Card,
  Col
} from 'ant-design-vue'

Vue.component(Divider.name, Divider)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
Vue.component(Input.Group.name, Input.Group)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Input.TextArea.name, Input.TextArea)
Vue.component(Input.Search.name, Input.Search)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Button.name, Button)
Vue.component(Tabs.name, Tabs)
Vue.component(Dropdown.name, Dropdown)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Tabs.TabPane.name, Tabs.TabPane)
Vue.component(Select.name, Select)
Vue.component(Select.OptGroup.name, Select.OptGroup)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Radio.name, Radio)
Vue.component(Switch.name, Switch)
Vue.component(Radio.Group.name, Radio.Group)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Checkbox.Group.name, Checkbox.Group)
Vue.component(Radio.Button.name, Radio.Button)
Vue.component(Modal.name, Modal)
Vue.component(Popover.name, Popover)
Vue.component(Tag.name, Tag)
Vue.component(Tag.CheckableTag.name, Tag.CheckableTag)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Icon.name, Icon)
Vue.component(Transfer.name, Transfer)
Vue.component(Rate.name, Rate)
Vue.component(Table.name, Table)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
// Vue.component(Tree.name, Tree)
Vue.component(Popconfirm.name, Popconfirm)
// Vue.component(Tree.TreeNode.name, Tree.TreeNode)
Vue.component(TreeSelect.name, TreeSelect)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
Vue.component(List.name, List)
Vue.component(List.Item.name, List)
Vue.component(List.Item.Meta.name, List)
Vue.component(TreeSelect.TreeNode.name, TreeSelect.TreeNode)
Vue.component(DatePicker.name, DatePicker)
Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker)
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker)
Vue.component(DatePicker.WeekPicker.name, DatePicker.WeekPicker)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Pagination.name, Pagination)
Vue.component(Upload.name, Upload)
Vue.component(Upload.Dragger.name, Upload.Dragger)
Vue.component(Alert.name, Alert)
Vue.component(Cascader.name, Cascader)
Vue.component(Alert.name, Alert)
Vue.component(Row.name, Row)
Vue.component(AutoComplete.name, AutoComplete)
Vue.component(LocaleProvider.name, LocaleProvider)
Vue.component(Collapse.Panel.name, Collapse.Panel)
Vue.component(Collapse.name, Collapse)
Vue.component(Col.name, Col)

// Vue.prototype.$message = message;
Vue.component(Drawer.name, Drawer)
Vue.component(Spin.name, Spin)
Vue.component(Progress.name, Progress)
Vue.component(Card.name, Card)
// Vue.prototype.$message = message
// Vue.prototype.$notification = notification;
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm
Vue.use(Tree)
