import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//npm install @react-native-async-storage/async-storage 為了將Access Token儲存到本地，避免呼叫太多次，所使用的asyncstorage

const refreshAccessToken = async () => {
    // 發送用戶驗證請求，獲取訪問令牌ACCESS_TOKEN
    // https是TDX網站提供獲取Access Token
    // headers屬性來設置請求的標頭
    try{
        const response = await fetch('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=s111119002-3de30a2f-34e1-4a7e&client_secret=69347c38-2150-4755-9697-f4166f3d4875'
        });
        const data = await response.json();
        console.log('Received data:', data);
        // 將取得的 Access Token 存儲到本地
        await saveAccessToken(data.access_token);
    }catch(error){
        console.error('Failed to refresh access token:', error);
    }
};

const saveAccessToken = async (accessToken) => {
    try {
        await AsyncStorage.setItem('access_token', accessToken);
    } catch (error) {
        console.error('Failed to save access token:', error);
    }
};

const getAccessToken = async () => {
    try {
        const accessToken = await AsyncStorage.getItem('access_token');
        return accessToken;
    } catch (error) {
        console.error('Failed to get access token:', error);
        return null;
    }
};

const clearAccessToken = async () => {
    try {
        await AsyncStorage.removeItem('access_token');
    } catch (error) {
        console.error('Failed to clear access token:', error);
    }
};

const getAPI = async () => {
    try {
        // 使用存儲的 Access Token 進行 API 請求
        const accessToken = await getAccessToken();
        if (!accessToken) {
            // 如果 Access Token 過期或不存在，重新獲取
            await refreshAccessToken();
        }
        // 'Authorization': `Bearer ${tokenData.access_token}` 這告訴伺服器，請求的發起者擁有存取權杖，並且有權訪問相關資源
        const apiResponse = await fetch('https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taipei/950?%24top=30&%24format=JSON', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        // 檢查 HTTP 響應狀態碼
        if (!apiResponse.ok) {
            throw new Error('Failed to fetch data from TDX API');
        }
        const apiData = await apiResponse.json();
        apiData.forEach(item => {
            console.log('StopName (Zh_tw):', item.StopName.Zh_tw);
        });

        return apiData;
    } catch (error) {
        console.error('Error fetching data:', error);
        // 在這裡處理錯誤
        return null;
    }
};

export default getAPI;