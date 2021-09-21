import {store} from "../../store";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {toggleShowName} from "../../store/profile/actions";
import {useSelector, useDispatch} from "react-redux";

export default function Profile() {
    const showName = useSelector((state) => state.showName);
    const dispatch = useDispatch();

    const clickCheckbox = () => {
        dispatch(toggleShowName);
    }

    return (
        <>
            <h1>Profile</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox onClick={clickCheckbox} />} label="Show name" />
            </FormGroup>

            {showName &&
                <p>User name: Vasya</p>
            }
        </>
    );
}