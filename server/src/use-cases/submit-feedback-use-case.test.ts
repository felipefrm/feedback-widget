import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendEmail: sendEmailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'OTHER',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,sjhj1q78wy178wshqsh12qs8',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  })

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,sjhj1q78wy178wshqsh12qs8',
    })).rejects.toThrow();
  })

  
  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'IDEA',
      comment: '',
      screenshot: 'data:image/png;base64,sjhj1q78wy178wshqsh12qs8',
    })).rejects.toThrow();
  })

  it('should not be able to submit feedback without an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'IDEA',
      comment: 'example comment',
      screenshot: 'test.png',
    })).rejects.toThrow();
  })
})