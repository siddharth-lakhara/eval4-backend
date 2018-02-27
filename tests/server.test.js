const http = require('http');

describe('Tests for basic server functionality', () => {
  test('Server running', () => {
    http.get('http://localhost:8080/ping', (response) => {
      response.setEncoding('utf8');
      expect(response.statusCode).toBe(200);
      response.on('data', () => {
        done();
      });
    });
  });
});

describe('tests for path update db', () => {
  test('Gives 200 response', () => {
    http.get('http://localhost:8080/updatedb', (response) => {
      response.setEncoding('utf8');
      expect(response.statusCode).toBe(200);
      response.on('data', () => {
        done();
      });
    });
  });
});

describe('tests for path update db', () => {
  test('Gives 200 response', () => {
    http.get('http://localhost:8080/first', (response) => {
      response.setEncoding('utf8');
      expect(response.statusCode).toBe(200);
      response.on('data', () => {
        done();
      });
    });
  });

  const verifyJSON = {
    allQuestions: [
      {
        question: 'What is the capital of India',
        questionId: 12,
        option1: 'New Delhi',
        option2: 'MP',
        option3: 'UP',
        option4: 'Bangalore',
      },
      {
        question: 'What is the capital of Afghanistan',
        questionId: 23,
        option1: 'Kabul',
        option2: 'Tirana',
        option3: 'Algiers',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Marshall Islands',
        questionId: 45,
        option1: 'Kabul',
        option2: 'Antananarivo',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Micronesia',
        questionId: 56,
        option1: 'Palikir',
        option2: 'Antananarivo',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Monaco',
        questionId: 67,
        option1: 'Palikir',
        option2: 'Monaco',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Micronesia',
        questionId: 78,
        option1: 'Palikir',
        option2: 'Antananarivo',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Montenegro',
        questionId: 89,
        option1: 'Podgorica',
        option2: 'Antananarivo',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Namibia',
        questionId: 90,
        option1: 'Palikir',
        option2: 'Antananarivo',
        option3: 'Windhoek',
        option4: 'Naypyidaw',
      },
      {
        question: 'What is the capital of Nigeria',
        questionId: 102,
        option1: 'Abuja',
        option2: 'Antananarivo',
        option3: 'Majuro',
        option4: 'Warsaw',
      },
      {
        question: 'What is the capital of Oman',
        questionId: 120,
        option1: 'Palikir',
        option2: 'Muscat',
        option3: 'Majuro',
        option4: 'Warsaw',
      },
      {
        question: 'What is the capital of Palau',
        questionId: 123,
        option1: 'Palikir',
        option2: 'Antananarivo',
        option3: 'Ngerulmud',
        option4: 'Warsaw',
      },
      {
        question: 'What is the capital of Madagascar',
        questionId: 34,
        option1: 'Kabul',
        option2: 'Antananarivo',
        option3: 'Algiers',
        option4: 'Andorra la Vella',
      },
    ],
  };

  test('Gives desired output', () => {
    let rcvdJSON = '';
    http.get('http://localhost:8080/first', (response) => {
      response.setEncoding('utf8');
      //   expect(response.statusCode).toBe(200);
      response.on('data', (data) => {
        rcvdJSON += data;
      });
      response.on('end', () => {
        expect(rcvdJSON).toEqual(verifyJSON);
        done();
      });
    });
  });
});
