import  {solution} from './gamersFunc';
import { expect } from 'chai';

describe('Gamer\'s solution tests', () => {
    it('checking solution for => aa??bbb', () => {
        expect(solution('aa??bbb')).to.equal(3);
    });
    it('checking solution for => a?b?aa?b?a', () => {
        expect(solution('a?b?aa?b?a')).to.equal(2);
    });
    it('checking solution for => a?b?aa?b?aaa', () => {
        expect(solution('a?b?aa?b?aaa')).to.equal(3);
    });
    it('checking solution for => a?b?aa?b?aaaa', () => {
        expect(solution('a?b?aa?b?aaaa')).to.equal(4);
    });
    it('checking solution for => ??b??', () => {
        expect(solution('??b??')).to.equal(1);
    });
    it('checking solution for => bbbbbb', () => {
        expect(solution('bbbbbb')).to.equal(6);
    });
    it('checking solution for => abbbbbb', () => {
        expect(solution('abbbbbb')).to.equal(6);
    });
    it('checking solution for => bbbbbba', () => {
        expect(solution('bbbbbba')).to.equal(6);
    });
    it('checking solution for => aa?b?aa', () => {
        expect(solution('aa?b?aa')).to.equal(3);
    });
    it('checking solution for empty', () => {
        expect(solution('')).to.equal(0);
    });
    it('checking solution for one symbol', () => {
        expect(solution('a')).to.equal(1);
    });
    it('checking solution for => ??????????????', () => {
        expect(solution('??????????????')).to.equal(1);
    });
    it('checking solution for => bb?aa', () => {
        expect(solution('bb?aa')).to.equal(3);
    });
    it('checking solution for => bb?aaaa', () => {
        expect(solution('bb?aaaa')).to.equal(4);
    });
    it('checking solution for => aba??aba', () => {
        expect(solution('aba??aba')).to.equal(2);
    });
    it('checking solution for => bab??bab', () => {
        expect(solution('bab??bab')).to.equal(2);
    });
    it('checking solution for => aba???bab', () => {
        expect(solution('aba???bab')).to.equal(2);
    });
    it('checking solution for => bab???aba', () => {
        expect(solution('bab???aba')).to.equal(2);
    });
    it('checking solution for => a?a', () => {
        expect(solution('a?a')).to.equal(1);
    });
    it('checking solution for => a?b', () => {
        expect(solution('a?b')).to.equal(2);
    });
    it('checking solution for => aa?bbb?aa', () => {
        expect(solution('aa?bbb?aa')).to.equal(3);
    });
    it('checking solution for => aaa?????bbb = aaabbaaabbb', () => {
        expect(solution('aaa?????bbb')).to.equal(3);
    });
    it('checking solution for => aaaaa??bbbbb', () => {
        expect(solution('aaaaa??bbbbb')).to.equal(5);
    });
    it('checking solution for => ???b?ba?a?a?', () => {
        expect(solution('???b?ba?a?a?')).to.equal(1);
    });
    it('checking solution for => abababababab', () => {
        expect(solution('abababab?b?????')).to.equal(1);
    });
    it('checking solution for => aaa???bbb???aaa???bbb??? = aaabbabbbaabaaabbabbbaab', () => {
        expect(solution('aaa???bbb???aaa???bbb???')).to.equal(3);
    });
    it('checking solution for => a???b', () => {
        expect(solution('a???b')).to.equal(2);
    });
    it('checking solution for => aa??aa = aabbaa', () => {
        expect(solution('aa??aa')).to.equal(2);
    });
});
