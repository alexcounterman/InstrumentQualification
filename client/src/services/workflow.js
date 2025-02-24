const qualificationStates = {
  DRAFT: 'draft',
  UNDER_REVIEW: 'under_review',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

function transitionState(currentState, action) {
  switch (action) {
    case 'submit':
      if (currentState === qualificationStates.DRAFT) return qualificationStates.UNDER_REVIEW;
      break;
    case 'approve':
      if (currentState === qualificationStates.UNDER_REVIEW) return qualificationStates.APPROVED;
      break;
    case 'reject':
      if (currentState === qualificationStates.UNDER_REVIEW) return qualificationStates.REJECTED;
      break;
    default:
      return currentState;
  }
}

module.exports = { transitionState, qualificationStates };
