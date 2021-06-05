export const loadCourier = () => {
    return{
        type: "LOAD_COURIER"
    };
};

export const loadCourierSuccess = couriers => {
    return{
        type: "LOAD_COURIER_SUCCESS",
        couriers: couriers
    };
};

export const loadCourierFail = error => {
    return{
        type: "LOAD_COURIER_FAIL",
        error
    };
};