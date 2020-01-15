import * as React from 'react';
import { Button, Input } from 'antd';
import { InvoiceEngine } from 'kts-invoice-engine';
const { TextArea } = Input;
class App extends React.Component<any, any> {
  REMOTE_URL = 'http://116.62.164.48:10003/ticket';
  URL = "http://127.0.0.1:8089/soap/Ifwkpjk_W";
  invoiceData = {
    BuyerName: '北京天宏迅联智慧网络科技有限公司',
    BuyerTaxID: '91500103MA5UAHBY29',
    BuyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
    BuyerFinancialAccount: '中行重庆市巴南支行113008319865',
    TaxExclusiveTotalAmount: '232',
    TaxTotalAmount: '0',
    InvoiceCode: "31000111111",
    InvoiceNo: '10010027',
    InvoiceType: '1',
    Payee: '收款人',
    Checker: '复核人',
    Note: 'RE2019082000000005',
    SellerFinancialAccount: '9150011375006381XB',
    SellerTaxID: '91500106771798823F',
    SellerName: '重庆兆富电器有限公司',
    SellerAddrTel: '重庆市巴南区宗申工业园 66372638',
    GoodsInfos: [
      {
        Item: '转子铁芯',
        Specification: 'SDM500(30H)',
        MeasurementDimension: '件',
        Quantity: '1',
        Price: '116',
        Amount: '116',
        TaxScheme: '0.16',
        TaxAmount: '0',
      },
      {
        Item: '定子铁芯总成',
        Specification: 'SDM500(整体式30厚）',
        MeasurementDimension: '件',
        Quantity: '1',
        Price: '116',
        Amount: '116',
        TaxScheme: '0.16',
        TaxAmount: '0',
      }
    ]
  };
  constructor(props: any) {
    super(props);
    this.state = {
      selectValue: 'jinhang',
      changeInput: '',
      info: '',
      textInput: {
        BuyerName: '北京天宏迅联智慧网络科技有限公司',
        BuyerTaxID: '91500103MA5UAHBY29',
        BuyerAddrTel: '重庆市渝中区华盛路1号2企业,023-89038588',
        BuyerFinancialAccount: '中行重庆市巴南支行113008319865',
        TaxExclusiveTotalAmount: '232',
        TaxTotalAmount: '0',
        InvoiceCode: "31000111111",
        InvoiceNo: '10010027',
        InvoiceType: '1',
        Payee: '收款人',
        Checker: '复核人',
        Note: 'RE2019082000000005',
        SellerFinancialAccount: '9150011375006381XB',
        SellerTaxID: '91500106771798823F',
        SellerName: '重庆兆富电器有限公司',
        SellerAddrTel: '重庆市巴南区宗申工业园 66372638',
        GoodsInfos: [
          {
            Item: '转子铁芯',
            Specification: 'SDM500(30H)',
            MeasurementDimension: '件',
            Quantity: '1',
            Price: '116',
            Amount: '116',
            TaxScheme: '0.16',
            TaxAmount: '0',
          },
          {
            Item: '定子铁芯总成',
            Specification: 'SDM500(整体式30厚）',
            MeasurementDimension: '件',
            Quantity: '1',
            Price: '116',
            Amount: '116',
            TaxScheme: '0.16',
            TaxAmount: '0',
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
            <TextArea value={this.state.info} rows={4}></TextArea>
          </div>
        }

      </div>
    );
  }
  onApply = () => {
    this.invoiceData = this.state.textInput;
  }
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
  onSelectChange = (value: any) => {
    this.setState({
      selectValue: value
    });
  }
  onKaiju = () => {
    const engine = new InvoiceEngine(this.state.selectValue);
    engine.fpkj(this.URL, this.invoiceData).then((res) => {
      console.log(res);
      this.setState({
        info: JSON.stringify(res)
      });
    }).catch((res)=>{
      console.log(res);
      this.setState({
        info:res
      });
    });

  }
  onInvalid = () => {
    const engine = new InvoiceEngine(this.state.selectValue);
    engine.fpzf(this.URL, {
      InvoiceCode: '3100153130',
      InvoiceNo: '54646508',
      InvoiceType: '1'
    });
  }
}

export default App;
