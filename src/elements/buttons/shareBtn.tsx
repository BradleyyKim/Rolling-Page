import * as React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Share from "../../components/shareModal/Share";

interface ShareLinkProps {
  onClick?: () => void;
}

const ShareLinkBtn = styled.button<ShareLinkProps>`
  font-size: 20px;
  font-weight: 700;
  line-height: 44px;
  color: #d4caed;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #d4caed;
  &:hover {
    color: #5a4a82;
    border-bottom: 2px solid #5a4a82;
    transform: translateY(-2px);
  }
`;

const ShareLinkToWriter = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <ShareLinkBtn onClick={onClickToggleModal}>
        친구와 함께 작성하기
      </ShareLinkBtn>
      {isOpenModal ? (
        <Share
          onClickToggleModal={onClickToggleModal}
          selecteURL={window.location.href}
        >
          {window.location.href}
        </Share>
      ) : (
        <span />
      )}
    </>
  );
};

const ShareLinkToReceiver = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const url = window.location.toString();
  const doneUrl = url.replace("board", "done");
  return (
    <>
      <ShareLinkBtn onClick={onClickToggleModal}>
        완성된 롤링페이지 선물하기
      </ShareLinkBtn>
      {isOpenModal ? (
        <Share onClickToggleModal={onClickToggleModal} selecteURL={doneUrl}>
          {doneUrl}
        </Share>
      ) : (
        <span />
      )}
    </>
  );
};

export { ShareLinkToWriter, ShareLinkToReceiver };
