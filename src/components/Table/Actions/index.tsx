import { useState } from 'react';
import Delete from '../../Icons/ActionIcons/Delete';
import Edit from '../../Icons/ActionIcons/Edit';
import Show from '../../Icons/ActionIcons/Show';
import { Actions } from './style';
import { Popover } from 'antd';
import styled from 'styled-components';
import CustomButton from '../../FormElements/Button';
import CancelButton from '../../FormElements/CancelButton';
import { MdOutlineError } from 'react-icons/md';

const Action = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

interface ActionsProps {
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleShow?: () => void;
}

const ActionsComponent: React.FC<ActionsProps> = ({
  handleEdit,
  handleDelete,
  handleShow,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Actions>
      <div className="actionsEditDelete">
        {handleShow && (
          <button className="btnStyle show" onClick={handleShow}>
            <Show />
          </button>
        )}

        {handleEdit && (
          <button className="btnStyle edit" onClick={handleEdit}>
            <Edit />
          </button>
        )}

        {handleDelete && (
          <>
            <Popover
              content={
                <Action>
                  <CancelButton
                    $width="55px"
                    $borderR="6px"
                    $height="30px"
                    onClick={hide}
                    $content="Yo'q"
                  />
                  <CustomButton
                    $width="55px"
                    $borderR="6px"
                    $height="30px"
                    onClick={handleDelete}
                  >
                    Ha
                  </CustomButton>
                </Action>
              }
              title={
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <MdOutlineError
                    style={{ color: 'var(--warning-color)', fontSize: 20 }}
                  />
                  O'chirishni tasdiqlaysizmi
                </div>
              }
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <button className="btnStyle delete">
                <Delete />
              </button>
            </Popover>
          </>
        )}
      </div>
    </Actions>
  );
};

export default ActionsComponent;
