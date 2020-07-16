export const useConfirm = (message, onConfirm, onReject) => {
    if(!onConfirm || typeof callBack !== 'function'){
      return;
    }
    if(onReject && typeof onReject !== 'function'){
      return;
    }
  
    const confirmAction = () => {
      if(window.confirm(message)){
        callBack();
      }
      else{
        reject();
      }
    };
  
    return confirmAction;
  }