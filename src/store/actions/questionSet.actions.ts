import { QuestionSet } from '@/models/entities/QuestionSet';
import { QuestionSetActionType } from './actions.constants';

export type QuestionSetActionPayloadType = {
  filters: {
    title: string[];
    repository_id: string;
    board_id: string;
    class_id: string;
    l1_skill_id: string;
    l2_skill_id: string;
    l3_skill_id: string;
    sub_skill_id: string;
    page_no: number;
  };
};

export type QuestionSetResponseType = {
  questionSets: QuestionSet[];
  totalCount: number;
};

export const getListQuestionSetAction = (
  payload: QuestionSetActionPayloadType
) => ({
  type: QuestionSetActionType.GET_LIST,
  payload,
});

export const getListQuestionSetCompletedAction = (
  payload: QuestionSetResponseType
) => ({
  type: QuestionSetActionType.GET_LIST_COMPLETED,
  payload,
});

export const getListQuestionSetErrorAction = (message: string) => ({
  type: QuestionSetActionType.GET_LIST_ERROR,
  payload: message,
});

export const deleteQuestionSetAction = (questionSetId: string) => ({
  type: QuestionSetActionType.DELETE_QUESTION_SET,
  payload: { questionSetId },
});

export const deleteQuestionSetCompletedAction = () => ({
  type: QuestionSetActionType.DELETE_QUESTION_SET_COMPLETED,
  payload: {},
});
