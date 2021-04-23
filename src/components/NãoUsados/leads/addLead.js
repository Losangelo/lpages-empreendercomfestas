export default function addLead(action) {
  try {
    const response = yield fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    const newLead = yield response.json();

    yield put({
      type: t.LEAD_ADD_SUCCEEDED,
      payload: newLead.data,
    });
  } catch (error) {
    yield put({
      type: t.LEAD_ADD_FAILED,
      payload: error.message,
    });
  }
}
