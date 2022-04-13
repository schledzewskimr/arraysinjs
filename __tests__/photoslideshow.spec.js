import {photoShow} from '../photoslideshow';
import {jest} from '@jest/globals';

//  'toBe()'
describe('photo index beginning', () => {
    test('index starts at 0', () => {
        expect(photoShow.currentPhotoIndex).toBe(0)
    })
})
//  'toHaveLength()'
describe('length of photo array', () => {
    test('length=3',() => {
        expect(photoShow.photoList).toHaveLength(3);
    })
})
//  'toBeTruthy()'
describe('is it truthy?', () => {
    test("we're truthy", () => {
        expect(photoShow.photoList).toBeTruthy();
    })
})
//  'toHaveBeenCalled()'
// didnt have a function that could use this :(
function creativeColor(callback, color) {
    if (color !== 'green') {
        callback(color);
    }
}

describe('creative color', () => {
    test('make sure its not green', () => {
        const myColor = jest.fn();
        creativeColor(myColor, 'yellow');
        expect(myColor).toHaveBeenCalled();
    })
})

//  'toHaveReturned()'
describe('unsure of this one', () => {
    test('does nothing to return', () => {
        const thisMeansNothing = jest.fn(() => true);
        thisMeansNothing();
        expect(thisMeansNothing).toHaveReturned();
    })
})