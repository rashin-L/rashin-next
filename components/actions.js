'use server'



import axios from 'axios';

export async function slugProject() {
    const solarDate = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const formattedStartDate = shamsi.gregorianToJalali(start.getFullYear(), start.getMonth() + 1, start.getDate()).join('/');
        const formattedEndDate = shamsi.gregorianToJalali(end.getFullYear(), end.getMonth() + 1, end.getDate()).join('/');

        return `${formattedStartDate} - ${formattedEndDate}`;
    };

    try {
        const response = await axios.get(`${config.backendUrl}/project/projects`);

        if (response.status === 200) {
            const data = response.data;
            // console.log(data[0]?.start_date)
            // console.log(data[0]?.end_date)
            const myDate = solarDate(data[0]?.start_date, data[0]?.end_date);
            // const endDate = solarDate(data[0]?.end_date);

            return {
                props: {
                    projects: data,
                    myDate: myDate,
                    // endDate: endDate
                }
            };
        } else {
            console.log('Response is not successful');
            return {
                props: {
                    projects: []
                }
            };
        }
    } catch (error) {
        console.log('Error occurred while fetching data:', error);
        return {
            props: {
                projects: []
            }
        };
    }
}