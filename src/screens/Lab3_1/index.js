import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react';
import { styles } from './styles';

const Lab3_1 = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [pass, setPassword] = useState('')
    return (
        <View style={styles.container}>
            {/*Bai 2 */}
            <View styles={styles.bai2}>
                <TextInput
                    value={name}
                    onChange={setName}
                    placeholder='Nhap ho va ten'
                    style={styles.inputStyle}
                />
                <TextInput
                    value={phone}
                    onChange={setPhone}
                    placeholder='Nhap so dien thoai'
                    keyboardType='phone-pad'
                    style={styles.inputStyle}
                />
                <TextInput
                    value={pass}
                    onChange={setPassword}
                    placeholder='Nhap mat khau'
                    secureTextEntry={true}
                    style={styles.inputStyle}
                />
            </View>
            
            {/*Bai 1 */}
            <View style={styles.bai1}>
                {/*line1 */}
                <Text style={{ color: 'white', paddingBottom: 5 }}>
                    <Text style={{ fontSize: 18 }} >Em vào đời bằng
                        <Text style={{ color: 'red', fontWeight: 'bold' }}> vang đỏ </Text>
                        anh vào đời bằng <Text style={{ color: 'yellow' }}>nước trà</Text>
                    </Text>
                </Text>
                {/**Line 2 */}
                <Text style={{ color: 'white', paddingBottom: 5 }}>
                    <Text style={{ fontSize: 18 }}>Bằng cơn mưa thêm<Text style={{
                        fontWeight: 'bold',
                        fontSize: 20, fontStyle: 'italic'
                    }}> mùi đất</Text> và <Text style={{ fontSize: 15 }}>
                            bằng hoa dại mọc trước nhà </Text>
                    </Text>
                </Text>
                {/**Line3 */}
                <Text style={{ color: '#525559', paddingBottom: 5 }}>
                    <Text style={{ fontSize: 18 }}><Text style={{ fontStyle: 'italic' }}>
                        Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ </Text>
                    </Text>
                </Text>
                {/**Line 4 */}
                <Text style={{ color: 'white', fontSize: 18, paddingBottom: 5 }}>Lý trí em là
                    <Text style={styles.styleText}> Công cụ</Text> còn trái tim anh là
                    <Text style={styles.styleText}> động cơ </Text>
                </Text>
                {/**Line 5 */}
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'right', paddingBottom: 5 }}>
                    Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
                </Text>
                {/**Line 6 */}
                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#525559', paddingBottom: 5 }}>
                    Anh muốn chân mình đạp đất không muốn đạp ai dưới chân mình
                </Text>
                {/**Line 7 */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 5 }}>Anh vào đời bằng
                    <Text style={{ color: 'white' }}> mây trắng</Text> còn anh vào đời bằng
                    <Text style={{ color: 'yellow' }}> nắng xanh</Text>
                </Text>
                {/**Line 8 */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 5 }}>Em vào đời bằng
                    <Text style={{ color: 'yellow' }}> đại lộ</Text> và con đường đó giờ <Text style={{ color: 'white' }}>vắng anh</Text>
                </Text>
            </View>
        </View>
    );
};

export default Lab3_1

