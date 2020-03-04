import * as React from 'react';
import { Button, Input, Form, Select } from 'antd';
import { InvoiceEngine } from 'kts-invoice-engine';
const { TextArea } = Input;
const { Option } = Select;
/**
 * 如何调用 演示
 */
class App extends React.Component<any, any> {
  REMOTE_URL = 'http://116.62.164.48:10003/ticket';
  URL = "http://127.0.0.1:8089/soap/Ifwkpjk_W";
  invoiceData = {
    buyerName: '北京天宏迅联智慧网络科技有限公司',
    buyerTaxID: '91500103MA5UAHBY29',
    billingData: 'X150208001',
    buyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
    buyerFinancialAccount: '中行重庆市巴南支行113008319865',
    taxExclusiveTotalAmount: '280',
    taxTotalAmount: '44.8',
    invoiceType: '1',
    payee: '收款人',
    checker: '复核人',
    note: 'RE2019082000000005',
    sellerFinancialAccount: '9150011375006381XB',
    sellerTaxID: '91500106771798823F',
    sellerName: '重庆兆富电器有限公司',
    sellerAddrTel: '重庆市巴南区宗申工业园 66372638',
    mainGoodsName: '主要商品',
    comprehensiveTaxRate: '0.16',
    inventory: '8',
    goodsInfos: [
      {
        item: '转子铁芯',
        specification: 'SDM500(30H)',
        measurementDimension: '件',
        quantity: '1',
        price: '100',
        amount: '100',
        taxScheme: '0.16',
        taxAmount: '16',
        includeTaxSign: '0',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      },
      {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '100',
        amount: '100',
        taxScheme: '0.16',
        taxAmount: '16',
        includeTaxSign: '0',
        lineDiscount: '3',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001',
        discountAmount: '-10'
      },
      {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '100',
        amount: '100',
        taxScheme: '0.16',
        taxAmount: '16',
        includeTaxSign: '0',
        lineDiscount: '3',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001',
        discountAmount: '-10'
      }
    ]
  };
  invoiceData2 = {
    buyerName: '北京天宏迅联智慧网络科技有限公司',
    buyerTaxID: '91500103MA5UAHBY29',
    billingData: 'X150208001',
    buyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
    buyerFinancialAccount: '中行重庆市巴南支行113008319865',
    taxExclusiveTotalAmount: '1160',
    taxTotalAmount: '0',
    invoiceType: '1',
    payee: '收款人',
    checker: '复核人',
    note: 'RE2019082000000005',
    sellerFinancialAccount: '9150011375006381XB',
    sellerTaxID: '91500106771798823F',
    sellerName: '重庆兆富电器有限公司',
    sellerAddrTel: '重庆市巴南区宗申工业园 66372638',
    mainGoodsName: '主要商品',
    comprehensiveTaxRate: '0.16',
    inventory: '8',
    goodsInfos: [
      {
        item: '转子铁芯',
        specification: 'SDM500(30H)',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      },
      {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      }, {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '1',
        price: '116',
        amount: '116',
        taxScheme: '0.16',
        taxAmount: '0',
        includeTaxSign: '3',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      },
    ]
  };
  //红票数据
  invoiceData3 = {
    billingData: "X150208001",
    buyerName: '北京天宏迅联智慧网络科技有限公司',
    buyerTaxID: '91500103MA5UAHBY29',
    buyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
    buyerFinancialAccount: '中行重庆市巴南支行113008319865',
    taxExclusiveTotalAmount: '-200',
    taxTotalAmount: '-34',
    invoiceCode: "310001111288",
    invoiceNo: '10020159',
    redTag: '1',
    invoiceType: '1',
    payee: '收款人',
    checker: '复核人',
    note: 'RE2019082000000005',
    sellerFinancialAccount: '9150011375006381XB',
    sellerTaxID: '91500106771798823F',
    sellerName: '重庆兆富电器有限公司',
    sellerAddrTel: '重庆市巴南区宗申工业园 66372638',
    mainGoodsName: '主要商品',
    comprehensiveTaxRate: '0.17',
    inventory: '8',
    goodsInfos: [
      {
        item: '转子铁芯',
        specification: 'SDM500(30H)',
        measurementDimension: '件',
        quantity: '-1',
        price: '100',
        amount: '-100',
        taxScheme: '0.17',
        taxAmount: '-17',
        includeTaxSign: '0',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001'
      },
      {
        item: '定子铁芯总成',
        specification: 'SDM500(整体式30厚）',
        measurementDimension: '件',
        quantity: '-10',
        price: '10',
        amount: '-100',
        taxScheme: '0.17',
        taxAmount: '-17',
        includeTaxSign: '0',
        lineDiscount: '0',
        goodsTaxItem: '4001',
        taxCode: '1090602050000000000',
        goodsCode: '001',
      }
    ]
  };
  invalidD = { invoiceType: '1', invoiceCode: '3100153130', invoiceNo: '54646508' };
  constructor(props: any) {
    super(props);
    this.state = {
      selectValue: 'jinhang',
      changeInput: '',
      info: '',
      batchList: 5,
      invalidData: { invoiceType: '1', invoiceCode: '3100153130', invoiceNo: '54646508' },
      textInput: {
        buyerName: '北京天宏迅联智慧网络科技有限公司',
        buyerTaxID: '91500103MA5UAHBY29',
        buyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
        buyerFinancialAccount: '中行重庆市巴南支行113008319865',
        taxExclusiveTotalAmount: '232',
        taxTotalAmount: '0',
        invoiceType: '1',
        payee: '收款人',
        checker: '复核人',
        note: 'RE2019082000000005',
        sellerFinancialAccount: '9150011375006381XB',
        sellerTaxID: '91500106771798823F',
        sellerName: '重庆兆富电器有限公司',
        sellerAddrTel: '重庆市巴南区宗申工业园 66372638',
        inventory: '8',
        goodsInfos: [
          {
            item: '转子铁芯',
            specification: 'SDM500(30H)',
            measurementDimension: '件',
            quantity: '1',
            price: '100',
            amount: '100',
            taxScheme: '0.16',
            taxAmount: '16',
            goodsTaxItem: '4001',
            includeTaxSign: '0',
            taxCode: '1090602050000000000',
            goodsCode: '001'
          },
          {
            item: '定子铁芯总成',
            specification: 'SDM500(整体式30厚）',
            measurementDimension: '件',
            quantity: '1',
            price: '100',
            amount: '100',
            taxScheme: '0.16',
            taxAmount: '16',
            includeTaxSign: '0',
            goodsTaxItem: '4001',
            taxCode: '1090602050000000000',
            goodsCode: '001'
          }
        ]
      }
    };
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {
          <div className="App" style={{ padding: 10 }}>
            <p>
              <Select defaultValue="jinhang" style={{ width: 120,marginRight: 20 }} onChange={this.onSelectChange}>
                <Option value="jinhang">金杭</Option>
                <Option value="moni">模拟开票</Option>
              </Select>
              <Button style={{ marginRight: 20 }} onClick={this.onInvoiceMake} className='kts-but-default'>开票</Button>
              <Button style={{ marginRight: 20 }} onClick={this.onRedInvoiceMake} className='kts-but-default'>开红票</Button>
              <Button style={{ marginRight: 20 }} onClick={this.onInvoiceListMake} className='kts-but-default'>清单开票</Button>
              <Button style={{ marginRight: 20 }} onClick={this.onInvoiceBatchMake} className='kts-but-default'>批量开票</Button>
              <Button style={{ marginRight: 20 }} onClick={this.onChaXun} className='kts-but-default'>查询当前开具发票号码</Button>
              <Button onClick={this.onApply}>导入下方开票数据</Button>
            </p>
            <p>开票数据:</p>
            <p>
              <TextArea
                rows={4}
                onChange={this.onTextEnter}
                value={JSON.stringify(this.state.textInput)}
              />
            </p>

            <p>输出信息:</p>
            <p><TextArea value={this.state.info} rows={4}></TextArea></p>
            <p><Button style={{ marginRight: 20 }} onClick={this.onInvalid} className='kts-but-default'>作废</Button></p>
            <p>作废发票信息:</p>
            <p>
              <TextArea
                rows={4}
                onChange={this.onTextInvalidEnter}
                placeholder="{invoiceType:'1',invoiceCode:'3100153130',invoiceNo:'54646508'} 1专用发票 2普通发票"
                value={JSON.stringify(this.state.invalidData)}
              />
            </p>
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('invoiceCode')(
                  <Input placeholder="发票代码"></Input>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('invoiceNo')(
                  <Input placeholder="发票号码"></Input>
                )}
              </Form.Item>
              <Form.Item>
                <Button style={{ marginRight: 20 }} htmlType="submit" className='kts-but-default'>查询发票</Button>
              </Form.Item>
            </Form>
          </div>
        }
      </div>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.onIsMake(values);
      }
    });
  };
  onApply = () => {
    this.invoiceData = this.state.textInput;
  }
  //应用新数据
  onTextEnter = (e) => {
    const { value } = e.target;
    try {
      this.setState({
        textInput: JSON.parse(value)
      })
    } catch (e) {
      throw new SyntaxError('这不是一个json对象');
    }

  }
  //作废
  onTextInvalidEnter = (e) => {
    const { value } = e.target;
    this.setState({
      invalidData: JSON.parse(value)
    })
  }
  onSelectChange = (value: any) => {
    this.setState({
      selectValue: value
    });
  }
  onInvoiceMake = async () => {
    const invoiceInfo = await this.onChaXun();
    if (invoiceInfo !== false) {
      const str = `当前将要开具的是专用发票，发票号码${invoiceInfo.invoiceCode},代码为${invoiceInfo.invoiceNo}，请确保装入打印机中的纸质发票种类、代码、号码与之一致，点击确认后系统将会开具并打印该发票。`;
      this.setState({
        info: str
      });
      this.onKaiju();
    }
  }
  onRedInvoiceMake = async () => {
    this.onKaiju(this.invoiceData3);
  }
  onInvoiceListMake = async () => {
    const invoiceInfo = await this.onChaXun();
    if (invoiceInfo !== false) {
      const str = `当前将要开具的是专用发票，发票号码${invoiceInfo.invoiceCode},代码为${invoiceInfo.invoiceNo}，请确保装入打印机中的纸质发票种类、代码、号码与之一致，点击确认后系统将会开具并打印该发票。`;
      this.setState({
        info: str
      });
      this.onKaiju(this.invoiceData2);
    }
  }
  onInvoiceBatchMake = async () => {
    const invoiceInfo = await this.onChaXun();
    const { batchList } = this.state;
    if (invoiceInfo !== false) {
      const lastNo = Number(invoiceInfo.invoiceNo) + batchList;
      const str = `当前将要开具的是专用发票，共${batchList}张，发票代码/号码段为：${invoiceInfo.invoiceCode}/${invoiceInfo.invoiceNo}-${invoiceInfo.invoiceCode}/${lastNo}，请确保装入打印机中的纸质发票种类、代码、号码与之一致，点击确认后系统将会开具并打印这些发票。`;
      this.setState({
        info: str
      });
      this.onBatchKaiju();
    }
  }
  //开具
  onKaiju = async (data?): Promise<any> => {
    const engine = new InvoiceEngine(this.state.selectValue);
    return engine.fpkj(this.URL, data || this.invoiceData).then((res) => {
      console.log(this.invoiceData);
      this.setState({
        info: JSON.stringify(res)
      });
      if (res.returncode === '0') {
        return true;
      } else {
        return false;
      }

    }).catch((res) => {
      //console.log(res);
      this.setState({
        info: res
      });
      return false
    });
  }
  onBatchKaiju = async () => {
    const { batchList } = this.state;
    for (let i = 0; i <= batchList; i++) {
      let p: boolean;
      if (i >= 1) {
        //p = await this.onKaiju(this.invoiceData2);
        p = await this.onKaiju();
      } else {
        p = await this.onKaiju();
      }
      if (p === false) {
        console.log('break at loop :' + i);
        break
      }
    }
  }
  //查询当前即将开的发票
  onChaXun = (): Promise<any> => {
    const engine = new InvoiceEngine(this.state.selectValue);
    return engine.fphm(this.URL).then((res) => {
      //console.log(res);
      this.setState({
        info: JSON.stringify(res)
      });
      if (res.returncode === '0') {
        return res;
      } else {
        return false;
      }
    }).catch((res) => {
      //console.log(res);
      this.setState({
        info: res
      });
      return false;
    });
  }
  onIsMake = (data): Promise<any> => {
    const engine = new InvoiceEngine(this.state.selectValue);
    return engine.fpcx(this.URL, data).then((res) => {
      this.setState({
        info: JSON.stringify(res)
      });
      if (res.returncode === '0') {
        return res;
      } else {
        return false;
      }
    }).catch((res) => {
      this.setState({
        info: res
      });
      return false;
    });
  }
  onInvalid = () => {
    const engine = new InvoiceEngine(this.state.selectValue);
    const { invalidData } = this.state;
    console.log(invalidData);
    try {
      engine.fpzf(this.URL, invalidData).then((res) => {
        console.log(res);
        this.setState({
          info: JSON.stringify(res)
        });
      }).catch((res) => {
        console.log(res);
        this.setState({
          info: res
        });
      });
    } catch (e) {
      throw new SyntaxError('这不是一个json对象');
    }

  }
}

const WrappedHorizontalLoginForm = Form.create({})(App);
export default WrappedHorizontalLoginForm;
