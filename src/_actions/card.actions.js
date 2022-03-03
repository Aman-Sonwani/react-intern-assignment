import {cardService} from '../_services/card.service';
import { cardConstants } from '../_constants/card.constants';

export const cardActions = {
    add,

};

function add( formData) {
    return dispatch => {
        dispatch(request({formData}));

        cardService.add(formData)
            .then(
                card => { 
                    dispatch(success(card));
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                   
                }
            );
    };

    function request(card) { return { type: cardConstants.ADD_REQUEST, card } }
    function success(card) { return { type: cardConstants.ADD_SUCCESS, card } }
    function failure(error) { return { type: cardConstants.ADD_FAILURE, error } }
}