import React from 'react'
import useFetch from 'hooks/useFecth';
import Loading from '../../../components/Loading';

function VisitorDetails({ visitorId, token }) {

    const id = visitorId;
    const { data } = useFetch(`https://security-check-in.herokuapp.com/api/v1/visitors/${id}`, token);
    const userImg = "https://security-check-in.herokuapp.com/img/users/";
    const propImg = "https://security-check-in.herokuapp.com/img/properties/";

    if (!data) {
        return <Loading />
    }
    if (data <= 0) {
        return <Loading />
    }

    return (
        <div>
            <h5>Visitor Added by : </h5>
            <div className='image-cover'>
                <img src={`${userImg}${data?.securityId[0]?.photo}`} alt="" />
            </div>
            <p>{data?.securityId[0]?.firstName}</p>
            <p>{data?.securityId[0]?.lastName}</p>

            <h5>Property : </h5>
            <div className='image-cover'>
                <img src={`${propImg}${data?.propertyId[0]?.propertyImage}`} alt="" />
            </div>
            <div>
                <p className='px-3 h5'>Building Name : {data?.propertyId[0]?.buildingName}</p>
                <p className='px-3 h5'>Address : {data?.propertyId[0]?.address}</p>
                <p className='px-3 h5'>House Number : {data?.propertyId[0]?.houseNumber}</p>
            </div>
        </div>
    )

}

export default VisitorDetails