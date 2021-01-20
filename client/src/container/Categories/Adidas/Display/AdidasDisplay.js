import React, { Component } from 'react';
import './AdidasDisplay.css';
import '../../../../assets/css/categories.css';
import { Stage, Layer, Text } from 'react-konva';

class AdidasDisplay extends Component {
    state = {
        isDragging: false,
        x: 0,
        y: 16
    };
    render(){
        return (
                <div className="card card-content shoes-content adidas">
                    <div className="imgShoes text-center">
                        <svg className="product-svg" viewBox="0 0 1500 756">
                            <defs />
                            <path 
                                className={`cls-1 ${this.props.pathId === "id1" ? 'shoesactive' : ''}`} 
                                style={{fill:`#${this.props.pathId === "id1" ? `${this.props.colorPicker}` : ''}`}} 
                                d="M331.000,522.000 L310.000,522.000 L264.000,521.000 L230.000,519.000 L173.000,517.000 L129.000,512.000 L109.000,509.000 L109.000,488.000 L110.000,463.000 L114.000,425.000 L119.000,388.000 L131.000,357.000 L144.000,328.000 L162.000,301.000 L180.000,280.000 L199.000,254.000 L215.000,227.000 L227.000,195.000 L230.000,173.000 L231.000,151.000 L235.000,133.000 L244.000,123.000 L253.000,119.000 L262.000,117.000 L270.000,119.000 L280.000,119.000 L277.000,132.000 L279.000,154.000 L282.000,194.000 L291.000,231.000 L302.000,252.000 L315.000,266.000 L335.000,280.000 L364.000,291.000 C364.000,291.000 377.591,293.569 386.000,294.000 C396.791,294.553 404.000,294.000 404.000,294.000 C410.053,294.547 459.583,286.233 457.000,286.000 L481.000,278.000 L503.000,268.000 L527.000,255.000 L542.000,241.000 L556.000,226.000 L561.000,218.000 L564.000,215.000 L576.000,210.000 L592.000,214.000 L609.000,222.000 L631.000,235.000 L661.000,254.000 L691.000,267.000 L746.000,292.000 L804.000,322.000 L868.000,353.000 L935.000,388.000 L968.000,408.000 L982.000,411.000 L994.000,405.000 L1006.000,386.000 L1010.000,367.000 L1007.000,345.000 L1000.000,337.000 L1009.000,340.000 L1025.000,349.000 L1045.000,364.000 L1061.000,372.000 L1092.000,384.000 L1148.000,398.000 L1220.000,412.000 L1307.000,430.000 L1378.000,434.000 L1398.000,432.000 L1418.000,438.000 L1435.000,450.000 L1444.000,468.000 L1454.000,492.000 L1454.000,506.000 L1448.000,521.000 L1431.000,534.000 L1407.000,545.000 L1380.000,554.000 L1336.000,567.000 L1273.000,580.000 L1197.000,595.000 L1105.000,606.000 L1012.000,609.000 L914.000,601.000 L852.000,591.000 L786.000,581.000 L762.000,576.000 L782.000,560.000 L812.000,528.000 L849.000,495.000 L880.000,464.000 L912.000,433.000 L923.000,419.000 L904.000,406.000 L870.000,389.000 L858.000,382.000 L834.000,406.000 L785.000,455.000 L755.000,482.000 L722.000,513.000 L688.000,545.000 L671.000,560.000 L645.000,556.000 L618.000,552.000 L598.000,550.000 L617.000,531.000 L642.000,506.000 L667.000,484.000 L686.000,467.000 L711.000,448.000 L749.000,417.000 L774.000,393.000 L793.000,373.000 L806.000,361.000 L786.000,352.000 L768.000,342.000 L752.000,334.000 L737.000,325.000 L728.000,333.000 L711.000,352.000 L693.000,372.000 L664.000,401.000 L632.000,427.000 L599.000,449.000 L559.000,483.000 L529.000,512.000 L515.000,526.000 L505.000,536.000 L483.000,535.000 L458.000,532.000 L439.000,529.000 L424.000,528.000 L441.000,515.000 L469.000,487.000 L504.000,461.000 L533.000,439.000 L574.000,409.000 L612.000,379.000 L647.000,346.000 L669.000,324.000 L684.000,308.000 L673.000,299.000 L655.000,290.000 L643.000,283.000 L629.000,275.000 L618.000,268.000 L606.000,283.000 L580.000,310.000 L540.000,349.000 L514.000,373.000 L478.000,402.000 L443.000,429.000 L406.000,456.000 L367.000,487.000 L341.000,511.000 L336.000,516.000 L331.000,522.000 Z"
                                />
                            
                            <path 
                                className={`cls-1 ${this.props.pathId === "id2" ? 'shoesactive' : ''}`} 
                                style={{fill:`#${this.props.pathId === "id2" ? `${this.props.colorPicker}` : ''}`}} 
                                d="M325.000,522.000 L347.000,500.000 L378.000,475.000 L409.000,450.000 L444.000,424.000 L478.000,399.000 L516.000,368.000 L554.000,331.000 L585.000,298.000 L614.000,267.000 L640.000,278.000 L664.000,291.000 L688.000,306.000 L673.000,324.000 L649.000,348.000 L621.000,374.000 L593.000,397.000 L572.000,414.000 L528.000,446.000 L491.000,475.000 L430.000,528.000 L398.000,526.000 L365.000,523.000 L325.000,522.000 ZM502.000,536.000 L533.000,502.000 L558.000,477.000 L599.000,445.000 L631.000,418.000 L669.000,386.000 L693.000,365.000 L710.000,347.000 L734.000,323.000 L751.000,333.000 L778.000,347.000 L811.000,361.000 L789.000,383.000 L756.000,414.000 L725.000,440.000 L687.000,471.000 L652.000,501.000 L603.000,550.000 L576.000,546.000 L550.000,542.000 L521.000,538.000 L502.000,536.000 ZM666.000,560.000 L691.000,536.000 L735.000,496.000 L789.000,445.000 L822.000,413.000 L855.000,377.000 L873.000,389.000 L898.000,402.000 L927.000,419.000 L917.000,432.000 L890.000,459.000 L853.000,498.000 L809.000,540.000 L768.000,576.000 L744.000,573.000 L711.000,566.000 L685.000,562.000 L666.000,560.000 Z" 
                                /> 
                            <path 
                                className={`cls-1 ${this.props.pathId === "id3" ? 'shoesactive' : ''}`}  
                                style={{fill:`#${this.props.pathId === "id3" ? `${this.props.colorPicker}` : ''}`}} 
                                d="M554.000,187.000 L541.000,159.000 L527.000,134.000 L522.000,121.000 L521.000,105.000 L531.000,88.000 L551.000,72.000 L579.000,59.000 L602.000,54.000 L619.000,56.000 L637.000,72.000 L658.000,89.000 L691.000,119.000 L728.000,149.000 L750.000,167.000 L758.000,171.000 L747.000,174.000 L728.000,185.000 L704.000,201.000 L679.000,214.000 L653.000,197.000 L630.000,186.000 L605.000,178.000 L583.000,176.000 L564.000,181.000 L554.000,187.000 ZM578.000,210.000 L601.000,205.000 L625.000,214.000 L648.000,226.000 L669.000,239.000 L681.000,246.000 L689.000,250.000 L707.000,239.000 L727.000,225.000 L741.000,214.000 L761.000,201.000 L780.000,194.000 L777.000,211.000 L770.000,233.000 L758.000,258.000 L740.000,272.000 L751.000,278.000 L768.000,288.000 L785.000,295.000 L807.000,272.000 L825.000,256.000 L843.000,243.000 L851.000,258.000 L844.000,283.000 L838.000,299.000 L828.000,317.000 L855.000,330.000 L874.000,336.000 L891.000,321.000 L914.000,303.000 L915.000,321.000 L914.000,342.000 L914.000,358.000 L933.000,370.000 L945.000,376.000 L953.000,364.000 L957.000,342.000 L955.000,321.000 L950.000,306.000 L967.000,322.000 L984.000,334.000 L990.000,337.000 L994.000,335.000 L1001.000,336.000 L1012.000,343.000 L1015.000,363.000 L1013.000,380.000 L1007.000,396.000 L996.000,407.000 C996.000,407.000 982.318,413.885 979.000,413.000 C974.901,411.907 962.000,408.000 962.000,408.000 L904.000,375.000 L819.000,332.000 L745.000,295.000 L697.000,272.000 L657.000,254.000 L626.000,235.000 L578.000,210.000 ZM868.000,295.000 L867.000,280.000 L870.000,251.000 L878.000,260.000 L886.000,266.000 L894.000,272.000 L883.000,287.000 L868.000,295.000 ZM796.000,237.000 L799.000,219.000 L804.000,205.000 L815.000,219.000 L822.000,222.000 L809.000,230.000 L796.000,237.000 Z"
                                />
                            <path 
                                className={`cls-1 ${this.props.pathId === "id4" ? 'shoesactive' : ''}`}  
                                style={{fill:`#${this.props.pathId === "id4" ? `${this.props.colorPicker}` : ''}`}} 
                                d="M540.000,229.000 L555.000,218.000 L570.000,212.000 L584.000,210.000 L599.000,208.000 L621.000,216.000 L634.000,224.000 L646.000,229.000 L664.000,239.000 L687.000,251.000 L698.000,248.000 L715.000,237.000 L735.000,221.000 L755.000,208.000 L774.000,198.000 L778.000,196.000 L774.000,217.000 L765.000,238.000 L755.000,258.000 L741.000,269.000 L736.000,274.000 L749.000,283.000 L767.000,291.000 L779.000,296.000 L786.000,297.000 L802.000,280.000 L824.000,263.000 L840.000,251.000 L843.000,247.000 L846.000,254.000 L843.000,271.000 L837.000,296.000 L828.000,312.000 L825.000,319.000 L833.000,325.000 L847.000,331.000 L860.000,336.000 L871.000,340.000 L883.000,332.000 L904.000,314.000 L912.000,307.000 L912.000,328.000 L911.000,349.000 L910.000,361.000 L924.000,369.000 L935.000,376.000 L944.000,380.000 L955.000,367.000 L958.000,350.000 L959.000,331.000 L956.000,315.000 L952.000,309.000 L939.000,303.000 L927.000,292.000 L912.000,279.000 L902.000,275.000 L891.000,272.000 L887.000,280.000 L876.000,290.000 L870.000,293.000 L870.000,281.000 L872.000,260.000 L869.000,250.000 L859.000,237.000 L846.000,226.000 L832.000,222.000 L818.000,222.000 L805.000,229.000 L800.000,232.000 L805.000,212.000 L805.000,200.000 L797.000,185.000 L787.000,176.000 L778.000,172.000 L754.000,170.000 L735.000,178.000 L710.000,194.000 L687.000,208.000 L678.000,211.000 L662.000,198.000 L639.000,186.000 L607.000,176.000 L584.000,173.000 L564.000,179.000 L554.000,184.000 L547.000,204.000 L539.000,225.000 L540.000,229.000 Z" 
                                />
                        </svg>
                        <img 
                            className="img-responsive" 
                            src={this.props.display.shoesImage}
                            alt="imgShoes" />   
                    </div>
                    <Stage width={70} height={30} className="adidasText">
                        <Layer>
                                <Text
                                    className="text-mobile"
                                    text={this.props.display.text}
                                    x={this.state.x}
                                    y={this.state.y}
                                    draggable
                                    fontFamily={this.props.display.textStyle}
                                    fontSize={this.props.textFormat}
                                    fill={this.props.display.textColor}
                                    onDragStart={() => {
                                        this.setState({
                                            isDragging: true
                                        });
                                    }}
                                    onDragEnd={e => {
                                        this.setState({
                                            isDragging: false,
                                            x: e.target.x(),
                                            y: e.target.y()
                                        });
                                    }}
                                />
                        </Layer>
                    </Stage> 

                    <div className="imgLogo adidasLogo">
                        {
                            this.props.display.url === '' ? null : <img 
                                src={`${this.props.display.url}` || ""}
                                alt="logo"
                                />
                        }
                    </div>
                </div>
        )
    }
}

export default AdidasDisplay;