const applyRegexp = require('../../helpers')

const logs = [
    '05:15 Person 01',
    '08:39 Person 01',
    '10:32 Person 02',
    '14:59 Person 03',
    '16:27 Person 02',
    '22:23 Person 04',
];

const expected = [
    '14:59 Person 03',
    '16:27 Person 02',
]

const expressions = /^1[2-8]/

it('Should find people who have access between 12:00 and 18:00', () => {
    expect(expected).toEqual(applyRegexp(logs,expressions))
})