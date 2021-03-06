import 'reflect-metadata';
import { expect } from 'chai';
import { SocketGateway } from '../../utils/socket-gateway.decorator';

describe('@SocketGateway', () => {

    @SocketGateway({ port: 80, namespace: '/' })
    class TestGateway {}

    it('should decorate type with expected metadata', () => {
        const isGateway = Reflect.getMetadata('__isGateway', TestGateway);
        const port = Reflect.getMetadata('port', TestGateway);
        const namespace = Reflect.getMetadata('namespace', TestGateway);

        expect(isGateway).to.be.eql(true);
        expect(port).to.be.eql(80);
        expect(namespace).to.be.eql('/');
    });

});