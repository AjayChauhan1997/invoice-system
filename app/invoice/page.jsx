'use client'
import React from 'react'

const Invoice = () => {
    const table_bdr = {
        borderLeft: '2px solid #ddd',
        borderRight: '2px solid #ddd',
        padding: '12px 1px',
        textAlign: 'right'
      }
      const tableData = [
        {
          id: 1,
          description: 'COVER FRONT BUMPER',
          partNumber: '521190M955',
          hsnCode: '87089900',
          quantity: 1.0,
          price: 19571.0,
          taxableValue: 12963.82,
          cgstRate: '14.00%',
          cgstAmount: 2520.75,
          sgstRate: '14.00%',
          sgstAmount: 2520.75,
          totalValue: 18005.3
        },
        {
          id: 2,
          description: 'UNIT ASSY HEADLAMP L',
          partNumber: '811500KC50',
          hsnCode: '87081090',
          quantity: 1.0,
          price: 93070.0,
          taxableValue: 70212.0,
          cgstRate: '9.00%',
          cgstAmount: 7706.2,
          sgstRate: '9.00%',
          sgstAmount: 7706.2,
          totalValue: 85624.4
        },
        {
          id: 3,
          description: 'GRILLE RADIATOR',
          partNumber: '531000KD10',
          hsnCode: '87089900',
          quantity: 1.0,
          price: 21690.0,
          taxableValue: 14367.46,
          cgstRate: '14.00%',
          cgstAmount: 2793.67,
          sgstRate: '14.00%',
          sgstAmount: 2793.67,
          totalValue: 19954.8
        },
        {
          id: 4,
          description: 'COVER FOG LAMP LH',
          partNumber: '521280K370',
          hsnCode: '85122010',
          quantity: 1.0,
          price: 5254.0,
          taxableValue: 3480.26,
          cgstRate: '14.00%',
          cgstAmount: 676.71,
          sgstRate: '14.00%',
          sgstAmount: 676.71,
          totalValue: 4833.68
        },
        {},
        {},
        {},
        {},
        {},
        {}
      ]
      
    return (
        <div style={{ padding: '4px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '2px solid #ddd',
              fontSize: '12px'
            }}
          >
            <tr style={{ border: '2px solid #ddd' }}>
              <td colSpan='12'>
                <div style={{ padding: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <strong>GSTIN:</strong> 08ALTPY3310M22C
                    </div>
                    <div>
                      <strong>Original Copy</strong>
                    </div>
                  </div>
                  <div style={{ display: 'flex', width: '100%', gap: '24px', alignItems: 'center' }}>
                    <div style={{ width: '150px', height: '60px', border: '1px solid red' }}>LOGO</div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0px',
                        width: '100%'
                      }}
                    >
                      <div style={{ textDecoration: 'underline', fontSize: '16px', fontWeight: '600' }}>TAX INVOICE</div>
                      <div style={{ fontSize: '24px', fontWeight: '600' }}>B K AUTOMOBILES</div>
                      <div style={{ fontSize: '14px', fontWeight: '600' }}>
                        B SANJAY NAGAR, NEAR UCO BANK, KANDIRA TENT HOUSE, KALWAR ROAD, JAIPUR
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{ border: '2px solid #ddd' }}>
              <td colSpan='6' style={{ border: '2px solid #ddd' }}>
                <div style={{ padding: '4px' }}>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>Invoice No.</div>
                    <div style={{ width: '70%' }}>: 89/2024-25</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>Dated</div>
                    <div style={{ width: '70%' }}>: 24-07-2024</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>Place of Supply</div>
                    <div style={{ width: '70%' }}>: Rajasthan(8)</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>Reverse Charge</div>
                    <div style={{ width: '70%' }}>: N</div>
                  </div>
                </div>
              </td>
              <td colSpan='6' style={{ border: '2px solid #ddd' }}>
                <div style={{ padding: '4px' }}>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>GR/RR No.</div>
                    <div style={{ width: '70%' }}>: </div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>Transport</div>
                    <div style={{ width: '70%' }}>: Party Hand</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>Vahicle No.</div>
                    <div style={{ width: '70%' }}>: </div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '30%' }}>Station</div>
                    <div style={{ width: '70%' }}>: Behror</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan='6' style={{ border: '2px solid #ddd' }}>
                <div
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4px' }}
                >
                  <div style={{ height: '80px' }}>
                    <div>Billed to:</div>
                    <div>SHRIKRISHNA AUTOMOBILES</div>
                    <div>add-135; nh-48 opp kaliash hospital, Behror</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '40%' }}>GSTIN/UIN</div>: 08AAWP7757511ZC
                  </div>
                </div>
              </td>
              <td colSpan='6' style={{ border: '2px solid #ddd' }}>
                <div
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4px' }}
                >
                  <div style={{ height: '80px' }}>
                    <div>Billed to:</div>
                    <div>SHRIKRISHNA AUTOMOBILES</div>
                    <div>add-135; nh-48 opp kaliash hospital, Behror</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '40%' }}>GSTIN/UIN</div>: 08AAWP7757511ZC
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>S.No.</th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>Description of Goods</th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>Part No.</th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>HSN</th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>Qty/PC</th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>List Price</th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>Price</th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>
                CGST <div>Rate</div>
              </th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>
                CGST <div>Amount</div>
              </th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>
                SGST <div>Rate</div>
              </th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>
                SGST <div>Amount</div>
              </th>
              <th style={{ border: '2px solid #ddd', padding: '4px 1px' }}>Amount( )</th>
            </tr>
            {tableData.map(item => (
              <tr key={item.id}>
                <td style={{ ...table_bdr, textAlign: 'left', paddingLeft: '4px' }}>{item?.id || ''}</td>
                <td style={{ ...table_bdr, textAlign: 'left' }}>{item?.description || ''}</td>
                <td style={table_bdr}>{item?.partNumber || ''}</td>
                <td style={table_bdr}>{item?.hsnCode || ''}</td>
                <td style={table_bdr}>{item?.quantity || ''}</td>
                <td style={table_bdr}>{item?.price || ''}</td>
                <td style={table_bdr}>{item?.taxableValue || ''}</td>
                <td style={table_bdr}>{item?.cgstRate || ''}</td>
                <td style={table_bdr}>{item?.cgstAmount || ''}</td>
                <td style={table_bdr}>{item?.sgstRate || ''}</td>
                <td style={table_bdr}>{item?.sgstAmount || ''}</td>
                <td style={table_bdr}>{item?.totalValue || ''}</td>
              </tr>
            ))}
            <tr style={{ border: '2px solid #ddd' }}>
              <td colSpan={11}>
                <div style={{ textAlign: 'center' }}>
                  <strong>Grand Total : 4.00 </strong>
                </div>
              </td>
              <td colSpan={1} style={{ border: '2px solid #ddd' }}>
                <div style={{ textAlign: 'center' }}>
                  <strong>1,28,418.18</strong>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={11}>
                <div style={{ height: '60px' }}></div>
              </td>
              <td colSpan={1} style={{ verticalAlign: 'baseline' }}>
                <div style={{ textAlign: 'center' }}>
                  <strong>1,28,418.00</strong>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={12}>
                <div style={{ fontSize: '16px', fontWeight: '700' }}>
                  Rupees: One Lakh Twenty Eight Thousand Four Hundred Eighteen Only
                </div>
              </td>
            </tr>
            <tr style={{ border: '2px solid #ddd' }}>
              <td colSpan={6} style={{ border: '2px solid #ddd', verticalAlign: 'top' }}>
                  <div>
                  <p>Terms & Conditions:</p>
                  <ol>
                    <li>Goods once sold will not be taken back.</li>
                    <li > Interest @ 18% p.a. will be charged if the payment is not made <br/>within the stipulated time.</li>
                    <li>Subject to 'Rajasthan' Jurisdiction only.</li>
                  </ol>
                </div>
              </td>
  
              <td colSpan={6} style={{ border: '2px solid #ddd',display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
                  <div>Receiver's Signature:</div>
                  <div>Authorised Signatory:</div>
             
              </td>
            </tr>
          </table>
        </div>
      )
}

export default Invoice