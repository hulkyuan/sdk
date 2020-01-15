import * as React from 'react';
import { Button, Input } from 'antd';
import { InvoiceEngine } from 'kts-invoice-engine';
const { TextArea } = Input;
class App extends React.Component<any, any> {
  REMOTE_URL = 'http://116.62.164.48:10003/ticket';
  URL = "http://127.0.0.1:8089/soap/Ifwkpjk_W";
  invoiceData = {
    buyerName: '北京天宏迅联智慧网络科技有限公司',
    buyerTaxID: '91500103MA5UAHBY29',
    buyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
    buyerFinancialAccount: '中行重庆市巴南支行113008319865',
    taxExclusiveTotalAmount: '232',
    taxTotalAmount: '0',
    invoiceCode: "31000111111",
    invoiceNo: '10010027',
    invoiceType: '1',
    payee: '收款人',
    checker: '复核人',
    note: 'RE2019082000000005',
    sellerFinancialAccount: '9150011375006381XB',
    sellerTaxID: '91500106771798823F',
    sellerName: '重庆兆富电器有限公司',
    sellerAddrTel: '重庆市巴南区宗申工业园 66372638',
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
      }
    ]
  };
  invalidD={ invoiceType: '1', invoiceCode: '3100153130', invoiceNo: '54646508' };
  constructor(props: any) {
    super(props);
    this.state = {
      selectValue: 'jinhang',
      changeInput: '',
      info: '',
      invalidData:{ invoiceType: '1', invoiceCode: '3100153130', invoiceNo: '54646508' },
      textInput: {
        buyerName: '北京天宏迅联智慧网络科技有限公司',
        buyerTaxID: '91500103MA5UAHBY29',
        buyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
        buyerFinancialAccount: '中行重庆市巴南支行113008319865',
        taxExclusiveTotalAmount: '232',
        taxTotalAmount: '0',
        invoiceCode: "31000111111",
        invoiceNo: '10010027',
        invoiceType: '1',
        payee: '收款人',
        checker: '复核人',
        note: 'RE2019082000000005',
        sellerFinancialAccount: '9150011375006381XB',
        sellerTaxID: '91500106771798823F',
        sellerName: '重庆兆富电器有限公司',
        sellerAddrTel: '重庆市巴南区宗申工业园 66372638',
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
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        {
          <div className="App" style={{ padding: 10 }}>
            {/* <Select defaultValue={this.state.selectValue} onChange={this.onSelectChange}>
              <Option value="jinhang">金杭</Option>
            </Select> */}
            <p>
              <Button style={{ marginRight: 20 }} onClick={this.onKaiju} className='kts-but-default'>开票</Button>
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

            <p>错误信息:</p>
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
          </div>
        }

      </div>
    );
  }
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
  //开具
  onKaiju = () => {
    const engine = new InvoiceEngine(this.state.selectValue);
    engine.fpkj(this.URL, this.invoiceData).then((res) => {
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
  }
  //查询当前发票
  onChaXun = () => {
    const engine = new InvoiceEngine(this.state.selectValue);
    engine.fphm(this.URL).then((res) => {
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

export default App;
