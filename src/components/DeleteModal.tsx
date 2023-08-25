import { useDispatch } from "react-redux";
import { deleteEducation } from "../features/education/educationLevelSlice";

interface deleteModalProps {
  handleClose: () => void;
  id: number | null;
}

const DeleteModal: React.FC<deleteModalProps> = ({ handleClose, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (id !== null) {
      dispatch(deleteEducation(id));
    }
    handleClose();
  };

  return (
    <div className="modal fixed  inset-0 z-[999] overflow-hidden  h-screen w-screen block mx-auto bg-[rgba(128,128,128,0.3)]">
      <div className=" relative block mx-auto top-[30%] rounded-3xl w-[360px] bg-white px-[30px] pt-3 pb-16">
        <div className="flex justify-end cursor-pointer w-full">
          <span onClick={() => handleClose()}>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAeAB4DAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igDybX/AI0+CNBvJbE3F9q1xA5jn/se3huYYpAcNH9puLq0t5WQ8P5Esqq2UJ3qyqAb/hT4j+FfGUjW+kXrpforSNp19Eba8MSY3SRrueGdVz83kTStGBukVFwSAd1QB5P8aNfu9A8EXDWMrQXGrXtto6zxs6SxRXEVzc3BidCCjyW9nLBuyNqysVIfYaAPn3wT4J8O+P8Aw7Lp2mzTaV410qZrm6ubpribTdR06a42IdiB0tmt43SMCNVlaVNzCaOdmtQDI8bxaB4O1/S9P8Gy38eseGiRq+syySqbvV43jdTBbyMY4ltyskcixItvMsgiInWNp5wD7d0PUDq+iaPqpUIdT0vT9QKDICm9tIbkqAckBfMwMnOBzQBy/wASPCcnjLwreaTbMqX8UkV/pxkIEbXlqHCwyMcBFuIpJrfzCQImlWRsqhUgHyVF431/wboEvg3T9LPhvWI9Qlm1nV1LJq12UlLwQFWiXyEhXEQljllSaADyhGs07TgGlJLrPxn1rRIINEtrPUrO2Fv4g8QWwcQXMAMfl3l8giWKCSGOOVbaBXkkuJJDDEVhSKOEA+1rK0hsLO0sLcFbeytoLSAMdzCG2iSGIM2BkhEUE4GTzigCzQBmahomjavt/tXSNM1PYNqf2hYWt7sXO7C/aYpdo3fNgYGeetAFmzsbHToRb6fZ2tjbg5EFnbw20IOAMiKFEQHAAzt6ADtQBaoA/9k="
              alt="close"
              className="cursor-pointer"
            />
          </span>
        </div>
        <h3 className="text-center w-full mt-2 text-sm">
          Bu məlumatı silmək istədiyinizə əminsinizmi?
        </h3>

        <div className="flex w-full justify-center mt-5">
          <button
            type="button"
            onClick={() => handleDelete()}
            className="text-white bg-PrimaryColor px-[50px] py-2  mr-20 rounded-full"
          >
            Bəli
          </button>
          <button
            type="button"
            onClick={() => handleClose()}
            className="text-black bg-transparent outline-none border-none"
          >
            Xeyr
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
