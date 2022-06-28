import { DataHttp } from '../data.http';

describe('Get Token function success test', () => {
  const mockUrl = '/token?email=usuario@gmail.com';
  const mockToken = {
    token: 'R5cCI6Ik-iwib-F0Ij-IyfQ-iJIUzI1NiIsI',
  };

  const getToken = jest.fn((url) => mockToken);
  
  it('returns token from an api call', () => {
    expect(getToken(mockUrl)).toBe(mockToken);
  });
  
  it('called getToken with a mockUrl', () => {
    expect(getToken).toHaveBeenCalledTimes(1);
    expect(getToken).toHaveBeenCalledWith(mockUrl);
  });

});

describe('Get Token function error test', () => {
  const mockUrl = '/token?email=usuario@gmail.com';
  const mockTokenError = '';
  const getToken = jest.fn((url) => mockTokenError);
  
  it('returns error from an api call', () => {
    expect(getToken(mockUrl)).toBe(mockTokenError);
  });
  
  it('called getToken with error mockUrl', () => {
    expect(getToken).toHaveBeenCalledTimes(1);
    expect(getToken).toHaveBeenCalledWith(mockUrl);
  });
});
describe('Get Token Test', () => {
  
  it('Called getToken with success', async () => {
    const mockToken = '4dcfc762-42f7-44cb-bd83-e52e8faba7fb';
    const getToken = await DataHttp.getToken('hrengelc@gmail.com');
    expect(getToken).toBe(mockToken);
  });
  
  it('Called getToken with error', async () => {
    const getToken = await DataHttp.getToken('');
    expect(getToken).toBe('');
  });
});

describe('Get Blocks Test', () => {
  it('Called getBlocks with success', async () => {
    const mockBlocks = [
      'TnGUpBBEjDFGopBjIMmcOHMTmGTWxRLsBGnrv8ZqzyCwS8l02yFfmx6tgABM5n8UNgdgJzdV9LZwGEpj12LChcPISfnLp09zuv58',
      'mbyeFEMb6IPm6l1snRBIzzpJC9PnjEjk17FCO9yY8SLTnt3kfsDcUfkUCw4BUYLrSz38anQh7ZUzPkCIkwTjBe00nK2fvnn0Mtwc',
      'dyPc2q5ICeUjVtDKAWavX8gZckXtjUBX2ES5Rki8tTJs1Y7Ckoaiqvqm3DhrD7hYEH1hoEsZZZBfv28DQtZWJqJtZyIE7KaerGRm',
      'zhccpyKuOK8JRzyOGcmUCCXFEzP841ODiSxfKjxxBhR9j6adRqVSeznbltSTTmWBT0cMreLtt1RhnYVEqXI36MEW60tpC4b8zVFf',
      '7iTkvUKQ6T6oGyzlb4HLEoJaMyuTOfge8DeI1s4izyNrQuK405JxO1C9zM7MfnRCgxmg9PMBosRR5M39n7iAcNIHjsmTZg0YT8Wm',
      'ymq6yykcyaT2fOeZqOy2pkUZ9md9UfqsVUZI5oGvZIxJL7RN6EkIoKLXD59VWQZ8xHMeOVmloG7Ux3euc17bDlKWfLzVnf5ZjSzl',
      '5EAjhRhRElnUgjMcncIdIwQdTzIiewKRVwJFCF89O99IFq1DKouqdsDArU2t3PX8DfDCW4p8GtZ0Qc7kLHpscHp9dfFojPZlaarW',
      'ATb7GmyLFyZJotd4pWVuAtKFuHVJAn7g6nV8Ut480nrxbMt0rDFeaRUI8MRqPEUcYH4SoBRjSq32aQvg8WYB6AnwxdjDR44P4jxa',
      'TRDqqUn5lEA3ZHnXOIVqBEJG8ThDbockWluyaeyQxX6tFj7aPL1tFj2UXxVli3wdCYMqhENI9PcTqQXZwXofyhyhbzCJ3RbB3hOE',
    ];
    const getBlocks = await DataHttp.getBlocks('4dcfc762-42f7-44cb-bd83-e52e8faba7fb');
    expect(getBlocks).toStrictEqual(mockBlocks);
  });
});
